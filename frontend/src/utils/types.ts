export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'subtitle1'
  | 'subtitle2'
  | 'subtitle3'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'caption1'
  | 'caption2'
  | 'caption3'
  | undefined;

export interface ActionItemType {
  label: string;
  icon: string;
  alt: string;
  onClick: () => void;
}

export interface RampOptionType {
  label: string;
  onClick: () => void;
}
export type ReportingDataType = {
  id: number;
  heading: string;
  textContent: string;
  amount: string;
};

export type CounterBoxType = {
  missingItemsCount: number;
  merchantRuleCount: number;
  categoryRuleCount: number;
};

export type DropDownVariant = 'active' | 'inactive';

export type QuickbookCategoriesType = {
  id: number;
  name: string;
  userId: number;
};

export type RampQuickBookMap = {
  rampId: number;
  rampName: string;
  quickBookId: number;
  quickBookName: string;
};

export type EachTransactionType = {
  id: number;
  vendorName: string;
  brandName: string;
  amount: number;
  date: Date;
  employeeName: string;
  quickBook: QuickbookCategoriesType | null;
  receipt: string;
  memo: string;
  userId: number;
};

export type EACH_PAYMENT_TYPE = {
  id: number;
  employeeName: string;
  amount: number;
  paymentDate: Date;
  invoiceDate: Date;
  dueDate: Date;
};

export type VendorType = {
  id: number;
  displayName: string;
  shortName: string;
};

export type EmployeeType = {
  id: number;
  name: string;
};

export interface employeeData {
  name: string;
}

export interface DraftType {
  id: number;
  employeeName: string;
  amount: number;
  dueDate: Date;
  invoiceDate: Date;
  invoiceNumber: string;
  accountNumber: string;
  status: string;
  paymentDate?: Date;
  transactionDate: Date;
}
export interface NewBillFormData {
  employeeName: string;
  employeeContact: string;
  invoiceNumber: string;
  invoiceDate: string;
  billDueDate: string;
  quickBookLocation: string;
  memo: string;
  invoiceTotal: number;
  bills?: BillDetails[];
  paymentType?: string;
}

export interface BillDetails {
  amount: number;
  quickbookDescription: string;
  category: string;
  class: string;
  customJob: string;
  id: number;
}
export type TransactionInDBType = {
  id: number;
  vendorId: number;
  amount: string;
  date: Date;
  employeeId: number;
  quickBookId: number;
  receipt: string;
  memo: string;
};

export type SignUpDataType = {
  name: string;
  emailInput: string;
  password: string;
};

export type SignUpErrorsType = {
  nameErrorMessage: string;
  emailErrorMessage: string;
  passwordErrorMessage: string;
  otherErrorMessage: string;
};

export type UserType = {
  id: number;
  name: string;
  email: string;
  password?: string;
};

export type CategoryRuleInformationType = {
  activeRules: RampQuickBookMap[];
  recentCategory: RampQuickBookMap[];
};

export type RampType = {
  id: number;
  name: string;
  userId: number;
};

export type CategoryRuleType = {
  id: number;
  ramp: RampType;
  quickbook: QuickbookCategoriesType;
  userId: number;
};

export interface Bill {
  amount: number;
  quickbookDescription: string;
  category: string;
  class: string;
  customJob: string;
  id: number;
}

export interface MappedBillData {
  invoiceDate: Date;
  invoiceNumber: string;
  dueDate: Date;
  amount: number;
  accountNumber: string;
  status: string;
  userId: number;
  employeeName: string;
  transactionDate: Date;
  paymentType: string;
  paymentDate?: Date;
}

export interface InvoiceInfoType {
  invoiceNo?: string;
  invoiceDate?: string;
  location?: string;
  name?: string;
  email?: string;
  memo?: string;
  bill: [
    {
      amount: number;
      quickbookDescription: string;
      category: string;
      class: string;
      customJob: string;
      id: number;
    },
  ];
}

export type CategoryRuleState = {
  count: number;
  isModalOpen: boolean;
};

export type MerchantRuleState = {
  count: number;
  isDialogOpen: boolean;
  isModalOpen: boolean;
};
