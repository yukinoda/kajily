import { Box, Button, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Head from "next/head";
import DefaultLayout from "../../../components/layouts/defaultLayout";
import Loader from "../../../components/loader";
import { Chore } from "../../../types/common.types";

const DetailPage = () => {
  const router = useRouter();
  const detailId = router.query.detailId;

  const [data, setData] = useState<Chore[] | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof detailId === "string") {
      const rawData = localStorage.getItem(detailId);
      setData(rawData && JSON.parse(rawData));
    }
  }, [detailId]);

  return (
    <>
      <Head>
        <title>kajily | {detailId}</title>
      </Head>
      <DefaultLayout>
        <Box mb={2}>
          <Button
            size="large"
            startIcon={<HomeRoundedIcon />}
            onClick={() => router.push("/home")}
          >
            <Typography variant="body2">Home</Typography>
          </Button>
        </Box>
        {data ? (
          data.map(item => (
            <Box mb={2} key={item.id}>
              <Paper
                variant="outlined"
                onClick={() =>
                  router.push(`/detail/${detailId}/chore/${item.id}`)
                }
              >
                <Box p={2} display="flex" justifyContent="space-between">
                  <Typography
                    variant="body1"
                    alignItems="center"
                    display="flex"
                  >
                    {item.name}
                  </Typography>
                  <ArrowForwardIosRoundedIcon />
                </Box>
              </Paper>
            </Box>
          ))
        ) : (
          <Loader />
        )}
      </DefaultLayout>
    </>
  );
};

export default DetailPage;
