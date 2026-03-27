import { SiGithub } from "react-icons/si";
import ExpertiseCards from "./ExpertiseCards";
import Link from "next/link";

const Expertise = () => {
  return (
    <section className="container-wrapper gap-4 flex">
      <div className="flex-[0.35] flex flex-col gap-4">
        <h5 className="font-vt323 border-b-2 w-fit leading-6">Expertise</h5>
        <h4 className="leading-10">Technical skills accross the fullStack</h4>
        <p className="text-sm">
          I work across the entire spectrum of modern development. From responsive interfaces to distributed systems, I build with precision and
          purpose.
        </p>

        <Link href={"https://github.com/eye-xo"} target="_blank">
          <button className="flex gap-2 items-center w-fit">
            <SiGithub /> eye-xo
          </button>
        </Link>
      </div>
      <div className="flex-[0.65]">
        <ExpertiseCards />
      </div>
    </section>
  );
};

export default Expertise;
