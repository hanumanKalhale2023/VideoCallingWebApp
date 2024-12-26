import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
function Room() {
    const { roomCode } = useParams()

    const myMeeting = async (element) =>{
        const appId=1303693537;
        const serverSecret ="fefaccf7fe9a99cd27aadf04ff31fca7";
        const kitToken =ZegoUIKitPrebuilt.generateKitTokenForTest(
            appId, 
            serverSecret,
            roomCode,
            Date.now().toString(),
            "Ankit"
        );
        const zp=ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container:element,
            scenario :{
                mode: ZegoUIKitPrebuilt.VideoConference,
            }
        },
    );
           
    }
  return (
    <>
      <div className='room'>
            <div ref={myMeeting} style={{ width: '100%', height: '100%' }} />
        <h2>Room: {roomCode}</h2>
      </div>
    </>
  )
}

export default Room
