export interface StatModel {
  allowedIps: string[];
  endpoint: string;
  latestHandshake: Date;
  transferRx: number;
  transferTx: number;
}
