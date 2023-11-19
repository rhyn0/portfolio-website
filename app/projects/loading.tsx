export default function ProjectsPageSkeleton() {
   return (
      <div className="container mx-auto">
         <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex h-96 flex-col items-center justify-center">
               <div className="h-1/2 w-1/2 animate-pulse rounded-full bg-gray-200"></div>
               <div className="h-1/2 w-1/2 animate-pulse rounded-full bg-gray-200"></div>
            </div>
            <div className="flex h-96 flex-col items-center justify-center">
               <div className="h-1/2 w-1/2 animate-pulse rounded-full bg-gray-200"></div>
               <div className="h-1/2 w-1/2 animate-pulse rounded-full bg-gray-200"></div>
            </div>
         </div>
      </div>
   );
}
