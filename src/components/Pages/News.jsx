import React from 'react';
import {Select, Typography,Row, Col, Avatar, Card} from 'antd';

import moment from "moment";

import {useGetCryptoNewsQuery} from "../Services/cryptoNews";
import Loader from '../Loader';

const {Text,Title} = Typography;

const {Option} = Select;

const demoImage = "http://coinrevolution.com/wp-content/uploads/2020/06/cryptonews.jpg";

function News({simplified}) {

    const {data:cryptoNews} = useGetCryptoNewsQuery({newsCategory: 'Cryptocurrency', count : simplified ? 6 : 12 })
    
    if(!cryptoNews?.value) return <Loader/>;

    return (
        <Row gutter={[24,24]}>
            {/* {!simplified && (
                <Col span={24}>
                    <Select showSearch className="select-news" 
                    placeholder="Select a Crypto"
                    onChange={(value)=>console.log(value)}
                    filterOption={(input,option) => option.children.toLowerCase()}
                    >

                    </Select>
                </Col>
            )} */}
            {cryptoNews.value.map((news,i)=>(
                <Col xs={24} sm={12} lg={8} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title" level={4}>{news.name}</Title>
                                <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt={news.name} style={{width:"100px",height:"100px"}}/>
                                </div>
                                <p style={{minHeight:"120px"}}>
                                    {news.description > 100 ? `${news.description.subString(0,100)}...` : news.description}
                                </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                </div>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    )
}

export default News
