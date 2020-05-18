 const filter = () => {
     let col = column.value;
     let cond = condition.value;
     let find = findValue.value;

     const ravno = i => {
         for (let j = 0; j < length; j++) {
             if (find == table.rows[j].cells[i].innerHTML) {
                 table.rows[j].style.display = "table-row";
             } else {
                 table.rows[j].style.display = "none";
             }
         }
     }
     const exec = i => {
         for (let j = 0; j < length; j++) {
             if (RegExp(find).exec(table.rows[j].cells[i].innerHTML)) {
                 table.rows[j].style.display = "table-row";
             } else {
                 table.rows[j].style.display = "none";
             }
         }
     }
     const bolshe = i => {
         for (let j = 0; j < length; j++) {
             if (table.rows[j].cells[i].innerHTML - find > 0) {
                 table.rows[j].style.display = "table-row";
             } else {
                 table.rows[j].style.display = "none";
             }
         }
     }
     const menshe = i => {
         for (let j = 0; j < length; j++) {
             if (table.rows[j].cells[i].innerHTML - find < 0) {
                 table.rows[j].style.display = "table-row";
             } else {
                 table.rows[j].style.display = "none";
             }
         }
     }

     for (let i = 1; i <= 3; i++) {
         if (i == col && cond == 1) {
             ravno(i)
         } else if (i == col && cond == 2) {
             exec(i)
         } else if (i == col && cond == 3) {
             bolshe(i)
         } else if (i == col && cond == 4) {
             menshe(i)
         }
     }
 }

 let sortFlag;

 const sort = (x) => {
     let sortedRows = Array.from(table.rows);
     if (!sortFlag || sortFlag == 2) {
         sortedRows.sort((rowA, rowB) => rowA.cells[x].innerHTML > rowB.cells[x].innerHTML ? 1 : -1).sort((rowA, rowB) => (rowA.cells[x].innerHTML - rowB.cells[x].innerHTML));
         sortFlag = 1;
     } else if (!sortFlag || sortFlag == 1) {
         sortedRows.sort((rowA, rowB) => rowA.cells[x].innerHTML < rowB.cells[x].innerHTML ? 1 : -1).sort((rowA, rowB) => (rowB.cells[x].innerHTML - rowA.cells[x].innerHTML));
         sortFlag = 2;
     }
     table.append(...sortedRows);

     for (let i = 0; i < length; i++) {
         table.rows[i].style.display = "none";
     }
     for (let i = 0; i < per; i++) {
         table.rows[i].style.display = "table-row";
     }
 }

