/*
 * The function should return the names of those entries whose date is the current date. The names should be separated by a comma.
 *
 * For example, here's an array of three entries and assume the date now is 2022-04-01.
 *
 * [{ name: "Harry" , date: "2022-04-01T02:53:42+05:30" }, { name: "Hermione" , date: "2022-04-02T02:53:42+05:30" }, { name: "Ron" , date: "2022-04-01T03:53:42+05:30" }]
 *
 * The function should return: ``` Harry,Ron ```. Please note that the names are separated by a comma without space.
 */
   function todaysEntries(entries) 
    {
		// Complete the function
   
		 let RetrievedDate = new Date().toISOString().split("T")[0]; 
		 let output = []; 
		 //
		 for (let i = 0; i < entries.length; i++)
		 { 
			// checking whether it has the same date
		   if (entries[i].date.includes(RetrievedDate)) 
		   {
		   // returning the name after verification 
				output.push(entries[i].name);
			}
		}
		// return the output in the required format
		 return output.join(","); 
	   }
	   // Trying to call the function 
/*   todaysEntries(
	   [
			{ name: "Innocent" , date: "2022-09-13T02:53:42+05:30"}, 
			{ name: "HARMLESS" , date: "2022-09-13T02:53:42+05:30"}, 
			{ name: "NAIVE" , date: "2022-04-01T03:53:42+05:30"} 
	   ]
	   );
	   */
	  module.exports = todaysEntries;
