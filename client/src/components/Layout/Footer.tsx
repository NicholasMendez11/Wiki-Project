import { Typography } from "@material-tailwind/react";
import CV from "../../assets/cv.pdf";
export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <ul className="flex flex-wrap items-center justify-end gap-y-2 gap-x-8 w-full">
          <li>
            <Typography
              as="a"
              href="mailto:nicholasmeeendez@gmail.com?subject=Contact&body=Hello%20Nicholas,"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Email
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://www.linkedin.com/in/nicholasgmendez/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Linkedin
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href={CV}
              download
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Curriculum
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              target="_blank"
              href="https://api.whatsapp.com/send/?phone=18098736034&text=Hey+Nicholas%2C+I+was+checking+your+website+and+want+to+get+in+contact+with+you%2C+are+you+available+now%3F&type=phone_number&app_absent=0"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Whatsapp
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              target="_blank"
              href="https://nicholamendez.com/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Portafolio
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Nicholas Gabriel Mendez Bertrand
      </Typography>
    </footer>
  );
}
