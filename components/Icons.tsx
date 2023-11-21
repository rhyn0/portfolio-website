import Github from "@/public/img/github.svg";
import Gmail from "@/public/img/gmail.svg";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
   github: (props: IconProps) => <Github {...props} />,
   gmail: (props: IconProps) => <Gmail {...props} />,
};
