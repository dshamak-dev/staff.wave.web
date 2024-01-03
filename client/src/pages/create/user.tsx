interface Props {}

export default function CompanyPage({}: Props) {
  return <main>Create User</main>;
}

export const getServerSideProps = (context: {
  params: Record<string, string>;
}) => {
  return { props: { ...context.params } };
};
