"use client";
import { useLottie } from 'lottie-react';
// import Lottie from 'react-lottie'


const LottieAnimation = ({ state, animationData }: { state: boolean, animationData: any }) => {
    const options = {
        loop: state,
        autoplay: state,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        }
    };
    const { View } = useLottie(options);

    return (
        // <Lottie options={{
        //     loop: state,
        //     autoplay: state,
        //     animationData,
        //     rendererSettings: {
        //         preserveAspectRatio: 'xMidYMid slice',
        //     }
        // }} />
        <>{View}</>
    )
}

export default LottieAnimation