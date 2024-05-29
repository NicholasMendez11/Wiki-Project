import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { formatNumber } from "../../utils/helpers";
import { FaEye } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

type Props = {
  img: string;
  title: string;
  description: string;
  views: number;
};

export default function CustomCard({ views, description, img, title }: Props) {
  return (
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
    <Card className="overflow-hidden cursor-pointer hover:scale-105 transition-all duration-200 shadow-lg bg-[#FAFAFA] p-3">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none h-48"
      >
        <div className="h-full w-full overflow-hidden">
          <img
            src={img}
            alt={title}
            className="object-cover brightness-70		hover:filter-none transition-all duration-200 w-full h-full"
          />
        </div>
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          See it in wikipedia
          <IoIosArrowForward />
        </div>
        <Typography className="font-normal flex items-center gap-2">
          <FaEye />
          {formatNumber(views)}
        </Typography>
      </CardFooter>
    </Card>
  );
}

{
  /* <Card className="max-w-[24rem] overflow-hidden cursor-pointer hover:scale-105 transition-all duration-200 ">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none h-48"
      >
        <div className="h-full w-full overflow-hidden">
          <img
            src={img}
            alt={title}
            className="object-scale-down object-center 	hover:filter-none transition-all duration-200 w-full h-full"
          />
        </div>
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
          {description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center -space-x-3">
          <Tooltip content="Natali Craig">
            <Avatar
              size="sm"
              variant="circular"
              alt="natali craig"
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
          <Tooltip content="Tania Andrew">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              className="border-2 border-white hover:z-10"
            />
          </Tooltip>
        </div>
        <Typography className="font-normal">{views}</Typography>
      </CardFooter>
    </Card> */
}
