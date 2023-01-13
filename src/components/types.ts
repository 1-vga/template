export interface Row {
    name?: string,
    name2?: string,
    date?: string,
    payment?: string,
    fees?: string,
    status?: string,
}

export enum TABLE {
    PROFILE_APPOINTMENT = 'PROFILE_APPOINTMENT',
    PROFILE_FINDINGS = 'PROFILE_FINDINGS'
};