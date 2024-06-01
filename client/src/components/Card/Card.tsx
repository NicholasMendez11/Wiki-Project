import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { Modal } from "../common/Modal";
import { Event, News } from "../../types/feed";
import DetailView from "../detail-views/DetailView";
import useEventCard from "../../hooks/useEventCard";

type Props = {
  event: Event | News;
};

export default function EventCard({ event }: Props) {
  const {
    handleDetails,
    getImageSource,
    getTitle,
    getText,
    getYear,
    setOpen,
    isDocumentViewed,
    open,
  } = useEventCard(event);
  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        handleOpen={handleDetails}
        children={<DetailView event={event} />}
        title="Details"
      />
      <Card
        className={` relative  cursor-pointer hover:scale-105 transition-all duration-200 shadow-lg bg-[#FAFAFA] ${
          isDocumentViewed && "brightness-50"
        } `}
        onClick={handleDetails}
      >
        {isDocumentViewed && (
          <div className="absolute z-10 right-3 -top-2  w-6 h-36 bg-red-400 flex flex-col text-white text-sm justify-center items-center rounded-b-md">
            <p>V</p>
            <p>I</p>
            <p>E</p>
            <p>W</p>
            <p>E</p>
            <p>D</p>
          </div>
        )}
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none h-48"
        >
          <div className="h-full w-full overflow-hidden">
            <img
              src={getImageSource()}
              alt={getTitle()}
              className="object-cover brightness-70 hover:filter-none transition-all duration-200 w-full h-full"
            />
          </div>
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {getTitle()}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            {getText()}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            See it in Wikipedia
            <IoIosArrowForward />
          </div>
          <Typography className="font-normal flex items-center gap-2">
            <MdOutlineDateRange />
            {getYear()}
          </Typography>
        </CardFooter>
      </Card>
    </>
  );
}

//* This is the previews look for the cards, leaving it here in case I decided to use it
// <figure className="relative h-96 w-full hover:scale-105 transition-all duration-200 cursor-pointer border-1 rounded-xl border-blue-gray-600 overflow-hidden shadow-xl">
//   <img
//     className="h-full w-full rounded-xl object-fill  brightness-75	hover:filter-none transition-all duration-200"
//     src={img}
//     alt="Wikipedia Image"
//   />
//   <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
//     <div>
//       <Typography variant="h5" color="blue-gray">
//         {title}
//       </Typography>
//       <Typography color="gray" className="mt-2 font-normal">
//         {description}
//       </Typography>
//     </div>
//   </figcaption>
// </figure>
