import { Box, Button, Typography } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DefaultLayout from "../../../../components/layouts/defaultLayout";
import { Chore, EventDataDef } from "../../../../types/common.types";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import Loader from "../../../../components/loader";
import ChoreItem from "../../../../components/choreItem";
import CountUpTimer from "../../../../components/CountUpTimer";
import { useCountUp } from "../../../../hooks/useCountUp";
import { Copyright } from "../../../../components/copyright";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

const ChorePage = () => {
  const router = useRouter();
  const { detailId, choreId } = router.query;

  const [title, setTitle] = useState<string | null>(null);
  const [data, setData] = useState<Chore | null>(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof detailId === "string" &&
      typeof choreId === "string"
    ) {
      const rawData = localStorage.getItem(detailId);
      if (rawData) {
        const event: EventDataDef = JSON.parse(rawData);
        setTitle(event.title);

        const chore = event.chores
          ? event.chores.find(item => item.id === choreId)
          : null;
        if (chore) {
          setData(chore);
        }
      }
    }
  }, [choreId, detailId]);

  const { running, start, stop, data: countData } = useCountUp();
  const completeAction = () => {
    stop();
    localStorage.setItem("completeTime", JSON.stringify(countData));
    router.push("/complete");
  };

  return (
    <>
      <Head>
        <title>
          Kajily | {title} | {data?.name}
        </title>
      </Head>
      <DefaultLayout>
        <Box mb={2}>
          <Button
            size="large"
            startIcon={<ArrowBackRoundedIcon />}
            onClick={() => router.push(`/detail/${detailId}`)}
          >
            <Typography variant="body2">Return to {title}</Typography>
          </Button>
        </Box>
        {data && (
          <Box mb={4} display="flex" justifyContent="center">
            <Typography variant="h4">{data.name}</Typography>
          </Box>
        )}
        {data?.relayTasks ? (
          data.relayTasks.map((item, idx) => {
            const relayTasksLen = data.relayTasks ? data.relayTasks.length : 0;

            return (
              <Box
                display="flex"
                alignItems="center"
                flexDirection="column"
                key={item.id}
              >
                <ChoreItem
                  data={item}
                  timerStop={completeAction}
                  dataLength={relayTasksLen}
                />
                {relayTasksLen - 1 !== idx && (
                  <Box m={1}>
                    <ArrowDropDownRoundedIcon />
                  </Box>
                )}
              </Box>
            );
          })
        ) : (
          <Loader />
        )}

        <CountUpTimer
          running={running}
          start={() => start()}
          data={countData}
        />
        <Copyright />
      </DefaultLayout>
    </>
  );
};

export default ChorePage;
