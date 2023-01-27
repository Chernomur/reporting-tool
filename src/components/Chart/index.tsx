import { FC } from "react";
import { VictoryChart, VictoryLine } from "victory";
import { VictoryTheme } from "victory-core";
import { fileValueType } from "../../types/fileValues";

type chartPropsType = {
  data: fileValueType[];
};

export const Chart: FC<chartPropsType> = ({ data }) => {
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine
        style={{
          data: { stroke: "rgb(91, 156, 255)" },
          parent: { border: "1px solid #ccc" },
        }}
        data={data}
      />
    </VictoryChart>
  );
};
