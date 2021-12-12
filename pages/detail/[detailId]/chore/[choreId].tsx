import { useRouter } from "next/router";

const ChorePage = () => {
  const router = useRouter();
  const choreId = router.query.choreId;

  return <>{choreId}</>;
};

export default ChorePage;
