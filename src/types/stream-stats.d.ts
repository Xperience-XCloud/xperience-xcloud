type RTCBasicStat = {
    address: string,
    bytesReceived: number,
    clockRate: number,
    codecId: string,
    frameWidth: number,
    frameHeight: number,
    framesDecoded: number,
    id: string,
    kind: string,
    mimeType: string,
    packetsReceived: number,
    profile: string,
    remoteCandidateId: string,
    sdpFmtpLine: string,
    state: string,
    timestamp: number,
    totalDecodeTime: number,
    type: string,
}


type StreamStatGrade = '' | 'bad' | 'ok' | 'good';
