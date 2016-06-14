var diagnostic = {
    attrId: {
        'numberOfResets':                   { id: 0x0000, type: 'UINT16' },
        'persistentMemoryWrites':           { id: 0x0001, type: 'UINT16' },
        'macRxBcast':                       { id: 0x0100, type: 'UINT32' },
        'macTxBcast':                       { id: 0x0101, type: 'UINT32' },
        'macRxUcast':                       { id: 0x0102, type: 'UINT32' },
        'macTxUcast':                       { id: 0x0103, type: 'UINT32' },
        'macTxUcastRetry':                  { id: 0x0104, type: 'UINT16' },
        'macTxUcastFail':                   { id: 0x0105, type: 'UINT16' },
        'aPSRxBcast':                       { id: 0x0106, type: 'UINT16' },
        'aPSTxBcast':                       { id: 0x0107, type: 'UINT16' },
        'aPSRxUcast':                       { id: 0x0108, type: 'UINT16' },
        'aPSTxUcastSuccess':                { id: 0x0109, type: 'UINT16' },
        'aPSTxUcastRetry':                  { id: 0x010A, type: 'UINT16' },
        'aPSTxUcastFail':                   { id: 0x010B, type: 'UINT16' },
        'routeDiscInitiated':               { id: 0x010C, type: 'UINT16' },
        'neighborAdded':                    { id: 0x010D, type: 'UINT16' },
        'neighborRemoved':                  { id: 0x010E, type: 'UINT16' },
        'neighborStale':                    { id: 0x010F, type: 'UINT16' },
        'joinIndication':                   { id: 0x0110, type: 'UINT16' },
        'childMoved':                       { id: 0x0111, type: 'UINT16' },
        'nwkFcFailure':                     { id: 0x0112, type: 'UINT16' },
        'apsFcFailure':                     { id: 0x0113, type: 'UINT16' },
        'apsUnauthorizedKey':               { id: 0x0114, type: 'UINT16' },
        'nwkDecryptFailures':               { id: 0x0115, type: 'UINT16' },
        'apsDecryptFailures':               { id: 0x0116, type: 'UINT16' },
        'packetBufferAllocateFailures':     { id: 0x0117, type: 'UINT16' },
        'relayedUcast':                     { id: 0x0118, type: 'UINT16' },
        'phyToMacQueueLimitReached':        { id: 0x0119, type: 'UINT16' },
        'packetValidateDropCount':          { id: 0x011A, type: 'UINT16' },
        'averageMacRetryPerApsMessageSent': { id: 0x011B, type: 'UINT16' },
        'lastMessageLqi':                   { id: 0x011C, type: 'UINT8' },
        'lastMessageRssi':                  { id: 0x011D, type: 'INT8' }
    },
    cmd: null,
    cmdRsp: null
};

module.exports = diagnostic;
