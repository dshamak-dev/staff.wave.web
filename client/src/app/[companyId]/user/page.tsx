interface Props {
  params: {
    companyId: string;
  }
}

export default function CompanyPage({ params: { companyId } }: Props) {
  return <main>Company #{companyId}</main>;
}
