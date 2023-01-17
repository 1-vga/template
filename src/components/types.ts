export interface Row {
    id?: string,
    name?: string,
    name2?: string,
    date?: string,
    payment?: string,
    fees?: string,
    status?: string,
    photo?: string,
    firstName?: string,
    lastName?: string,
}

export enum TABLE {
    PROFILE_APPOINTMENT = 'PROFILE_APPOINTMENT',
    PROFILE_FINDINGS = 'PROFILE_FINDINGS',
    DASHBOARD_ADMIN = 'DASHBOARD_ADMIN'
};