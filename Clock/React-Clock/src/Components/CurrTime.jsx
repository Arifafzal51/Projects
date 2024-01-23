function CurrTime() {

    let time = new Date();

    return <p>The Current Time is : {time.toLocaleDateString()} - { time.toLocaleTimeString() }</p>
}
export default CurrTime;
