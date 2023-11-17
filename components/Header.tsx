import ModeToggle from "./modeToggle";
export default function Header(): React.ReactNode {
   return (
      <header className="flex flex-row">
         <h1 className="text-3xl">Header Text</h1>
         <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
            in dolores cumque nisi et sed eaque voluptas quaerat magni
            voluptate!
         </div>
         <ModeToggle />
      </header>
   );
}
