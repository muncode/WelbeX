let per = 3;
const length = table.rows.length;

for (let i = 0; i < per; i++) {
    table.rows[i].style.display = "table-row";
}

const pageOn = x => {
    for (let i = 0; i < length; i++) {
        table.rows[i].style.display = "none";
    }
    for (let i = per * x - per; i < x * per && i < length; i++) {
        table.rows[i].style.display = "table-row";
    }
}