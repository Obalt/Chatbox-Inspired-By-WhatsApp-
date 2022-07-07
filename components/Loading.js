import { PuffLoader } from 'react-spinners';

function Loading() {
  return (
    <center style={{placeItems: "center", marginTop: "400px" }}>
      <div>
       
        <PuffLoader color='black' placeItems="center" />
      </div>
    </center>
  );
}

export default Loading