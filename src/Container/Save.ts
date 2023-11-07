export const Save = () => {
    const link = document.createElement("a");
    const content = document.getElementById("root")?.innerHTML;
    if(content == null){return}
    console.log("a")
    const file = new Blob([content], { type: 'text/plain' });
    link.href = URL.createObjectURL(file);
    link.download = "result.html";
    link.click();
    URL.revokeObjectURL(link.href);
 };