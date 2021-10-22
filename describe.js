var timer = document.getElementById('timer');
starttimer(timer);
function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function starttimer(e)
{
    var i = 60;
    while (i > 0)
    {
        i--;
        if (i<10)
        {
            e.textContent = "00:0" + i;
            e.style.color = "red";
        }
        else
        {
            e.textContent = "00:" + i;
        }
        await sleep(1000);
    }
    document.getElementById('description').disabled="true";
}