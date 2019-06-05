export class User {

    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    password: string;
    email: string;
    phoneNumber: string;
    balance: number;
    userVerified: boolean;
    ledgerEntries: Ledger[];

}

export class Query{
    allUsers: User[];
}

export class Ledger {
    id: string;
    amountWagered: number;
    collected: number;
    payout: number;
    user: User;
    wagerType: WagerType;
    outcome: Outcome;
}

export class WagerType {
    id: string;
    wagerType: string;
    ledgers: Ledger[];
}

export class Outcome {
    id: string;
    value: boolean;
    overUnder: string;
}
