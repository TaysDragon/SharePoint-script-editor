import { IArticle } from "../../../services/IArticle";
import {
  Icon,
  Label,
  Text,
  Stack,
  Image,
  ImageFit,
  DocumentCard,
  DocumentCardTitle,
  DocumentCardDetails
} from "office-ui-fabric-react";
import moment from "moment";
import styles from "../News.module.scss";
import React from "react";

export const NoNews = () => {

  return (
    <>
      <div
        className="card"
      >
        <Stack style={{justifyContent: 'center', alignItems:'center'}} verticalAlign="center" tokens={{ childrenGap: 5 }}>
          <div>
            <Icon iconName="News" className={styles.nonewsIcon}/>
          </div>
            <DocumentCardTitle
              title="No News find at this moment"
              className={styles.nonewsMessage}
            ></DocumentCardTitle>
        </Stack>
      </div>
      <div className="separator"></div>
    </>
  );
};
