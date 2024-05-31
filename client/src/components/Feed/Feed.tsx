import { Event } from "../../types/feed";
import EventCard from "../card/Card";
import Loader from "../common/Loader";

import Lottie from "lottie-react";
import LottieAnimation from "../../assets/notFound.json";
import useFeed from "../../hooks/useFeed";

function Feed() {
  const { feed } = useFeed();
  if (feed.isFetching)
    return (
      <div className="flex justify-center h-96 items-center">
        <Loader />
      </div>
    );
  if (feed.isError) return <h1>Something went wrong</h1>;

  const articlesEvents = feed.data?.data.events;
  return (
    <>
      {articlesEvents?.length! > 0 ? (
        <div>
          <h1 className="text-2xl font-semibold mt-10">That day in history</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {articlesEvents?.map((article: Event) => {
              return <EventCard key={article.text} event={article} />;
            })}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-96  text-gray-700 p-4 rounded-lg  md:text-2xl mt-8">
          No elements to show, try changing the date or the language.
          <Lottie
            animationData={LottieAnimation}
            loop={true}
            className="h-96"
          />
        </div>
      )}
    </>
  );
}

export default Feed;
