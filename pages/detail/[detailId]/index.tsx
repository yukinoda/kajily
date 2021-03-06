import { Box, Button, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Head from "next/head";
import DefaultLayout from "../../../components/layouts/defaultLayout";
import Loader from "../../../components/loader";
import { EventDataDef } from "../../../types/common.types";
import { Copyright } from "../../../components/copyright";
import Image from "next/image";

const DetailPage = () => {
  const router = useRouter();
  const detailId = router.query.detailId;

  const [data, setData] = useState<EventDataDef | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof detailId === "string") {
      const rawData = localStorage.getItem(detailId);
      setData(rawData && JSON.parse(rawData));
    }
  }, [detailId]);

  const getChoreIconImg = (id: string) => {
    switch (id) {
      case "laundry":
        return "/laundry.png";
      case "dish-washing":
        return "/dish.png";
      case "bedroom-cleaning":
        return "/bedroom.png";
      case "cooking-dinner":
        return "/cooking.png";
      default:
        return "";
    }
  };

  return (
    <>
      <Head>
        <title>Kajily | {data?.title}</title>
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
        <Box mb={4} display="flex" justifyContent="center">
          <Typography variant="h4">{data?.title}</Typography>
        </Box>
        {data?.chores ? (
          data.chores.map(item => (
            <Box mb={2} key={item.id}>
              <Paper
                variant="outlined"
                onClick={() =>
                  router.push(`/detail/${detailId}/chore/${item.id}`)
                }
              >
                <Box p={2} display="flex" justifyContent="space-between">
                  <Box display="flex" flexDirection="row" alignItems="center">
                    <Box mr={1}>
                      <Image
                        src={getChoreIconImg(item.id)}
                        alt={item.name}
                        height={24}
                        width={24}
                        layout="fixed"
                      />
                    </Box>
                    <Typography
                      variant="body1"
                      alignItems="center"
                      display="flex"
                    >
                      {item.name}
                    </Typography>
                  </Box>
                  <ArrowForwardIosRoundedIcon />
                </Box>
              </Paper>
            </Box>
          ))
        ) : (
          <Loader />
        )}
        <Copyright />
      </DefaultLayout>
    </>
  );
};

export default DetailPage;
