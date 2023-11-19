function TestingText({ elements }: { elements: string[] }) {
   return (
      <>
         {elements.map((element, index) => {
            return (
               <p key={index} className={element}>
                  {element}
               </p>
            );
         })}
      </>
   );
}

export default function Home() {
   const colors = {
      plum: [
         "text-plum-100",
         "text-plum-300",
         "text-plum-500",
         "text-plum-700",
         "text-plum-900",
      ],
      brick: [
         "text-brick-100",
         "text-brick-300",
         "text-brick-500",
         "text-brick-700",
         "text-brick-900",
      ],
      skyBlue: [
         "text-sky-blue-100",
         "text-sky-blue-300",
         "text-sky-blue-500",
         "text-sky-blue-700",
         "text-sky-blue-900",
      ],
      cream: [
         "text-cream-100",
         "text-cream-300",
         "text-cream-500",
         "text-cream-700",
         "text-cream-900",
      ],
      khaki: [
         "text-khaki-100",
         "text-khaki-300",
         "text-khaki-500",
         "text-khaki-700",
         "text-khaki-900",
      ],
   };
   const shadcnElem = [
      "text-border",
      "text-input",
      "text-ring",
      "text-background",
      "text-foreground",
      "text-primary",
      "text-primary-foreground",
      "text-secondary",
      "text-secondary-foreground",
      "text-destructive",
      "text-destructive-foreground",
      "text-muted",
      "text-muted-foreground",
      "text-accent",
      "text-accent-foreground",
      "text-popover",
      "text-popover-foreground",
      "text-card",
      "text-card-foreground",
   ];
   return (
      <>
         <main className="text-3xl">
            <div className="container grid justify-between">
               <div className="container grid grid-cols-5 justify-evenly">
                  {Object.entries(colors).map(([color, elems]) => {
                     return (
                        <div key={color} className="p-4">
                           <h1 className="text-3xl">{color}</h1>
                           <TestingText elements={elems} />
                        </div>
                     );
                  })}
               </div>
               <div className="w-full">
                  <h1 className="text-center text-3xl">ShadCN</h1>
                  <div className="grid grid-flow-col grid-rows-4 justify-between">
                     <TestingText elements={shadcnElem} />
                  </div>
               </div>
            </div>
         </main>
      </>
   );
}
