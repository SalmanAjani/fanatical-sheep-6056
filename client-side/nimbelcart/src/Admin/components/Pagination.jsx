import React, { useEffect, useState } from "react";

 const itemsPerPage = 5;
 
 const  Pagination = ({ data }) => {
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);
 
    const handlePagination=(data, itemsPerPage)=> {
     setTotalPages(Math.ceil(data.length / itemsPerPage));
   }
 
   useEffect(() => {
     handlePagination(data, itemsPerPage);
   }, [data, itemsPerPage]);
 
   const startIndex = (currentPage - 1) * itemsPerPage;
   const endIndex = startIndex + itemsPerPage;
   const currentData = data.slice(startIndex, endIndex);
 
   return (
     <div>
       <div>
         {currentData.map(item => (
           <div key={item.id}>
             {item.name}
           </div>
         ))}
       </div>
       <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
       <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
       <div>
         {Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNumber => (
           <button key={pageNumber} onClick={() => setCurrentPage(pageNumber)}>
             {pageNumber}
           </button>
         ))}
       </div>
     </div>
   );
 };
 

 