import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { formatDate, formatNumber, truncateText } from "../../utils/helpers";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import { Modal } from "../common/Modal";
import DetailView from "../DetailView/DetailView";
import { Event, News } from "../../types/feed";
import { ImageNotFound } from "../../utils/constants";

type Props = {
  event: News;
};

export default function NewsCard({ event }: Props) {
  const { links, story } = event;
  const [open, setOpen] = React.useState(false);
  const handleDetails = () => setOpen(!open);
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
        className="overflow-hidden cursor-pointer hover:scale-105 transition-all duration-200 shadow-lg bg-[#FAFAFA] p-3"
        onClick={handleDetails}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none h-48"
        >
          <div className="h-full w-full overflow-hidden">
            <img
              src={links[0].thumbnail?.source || ImageNotFound}
              alt={links[0].normalizedtitle}
              className="object-cover brightness-70		hover:filter-none transition-all duration-200 w-full h-full"
            />
          </div>
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray">
            {links[0].normalizedtitle}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 font-normal">
            {truncateText(links[0].extract, 100)}
          </Typography>
        </CardBody>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center -space-x-3">
            See it in wikipedia
            <IoIosArrowForward />
          </div>
          <Typography className="font-normal flex items-center gap-2">
            <MdOutlineDateRange />
            {formatDate(links[0].timestamp)}
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
