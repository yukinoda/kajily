import { Box, Button, Paper, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DefaultLayout from "../../../../components/layouts/defaultLayout";
import { Chore, RelayTask } from "../../../../types/common.types";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Loader from "../../../../components/loader";

const ChorePage = () => {
  const router = useRouter();
  const { detailId, choreId } = router.query;

  const [data, setData] = useState<RelayTask[] | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof detailId === "string" &&
      typeof choreId === "string"
    ) {
      const rawData = localStorage.getItem(detailId);
      if (rawData) {
        const chores: Chore[] = JSON.parse(rawData);
        const chore = chores.find(item => item.id === choreId);
        if (chore && chore.relayTasks) {
          setData(chore.relayTasks);
        }
      }
    }
  }, [choreId, detailId]);

  return (
    <>
      <Head>
        <title>
          kajily | {detailId} | {choreId}
        </title>
      </Head>
      <DefaultLayout>
        <Box mb={2}>
          <Button
            variant="contained"
            size="large"
            startIcon={<ArrowBackRoundedIcon />}
            onClick={() => router.push(`/detail/${detailId}`)}
          >
            <Typography variant="body2">Back</Typography>
          </Button>
        </Box>
        {data ? (
          data.map(item => (
            <Box mb={2} key={item.id}>
              <Paper variant="outlined">
                <Box p={2} display="flex" justifyContent="space-between">
                  <Typography variant="body1">{item.name}</Typography>
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

export default ChorePage;