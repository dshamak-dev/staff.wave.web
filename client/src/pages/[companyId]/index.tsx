interface Props {
  companyId: string;
}

export default function CompanyPage({ companyId }: Props) {
  return <main>Company #{companyId}</main>;
}

export const getServerSideProps = (context: {
  params: Record<string, string>;
}) => {
  const { companyId } = context.params;

  return { props: { companyId } };
};
