interface Props {
  path: string[];
}

export default function CompanyPage({ path }: Props) {
  return <main>Company {path}</main>;
}

export const getServerSideProps = (context: {
  params: Record<string, string>;
}) => {
  const { path } = context.params;

  return { props: { path } };
};
