import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const { detailId } = router.query;
  return <div>detail ID: {detailId}</div>;
};

export default Detail;
