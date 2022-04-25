import React from "react";

const Scouter = () => {
    return (
        <div className="scouter">
            <div>
                <div className="scouter_title">
                    <span>환산 주스탯 계산 (Ver 220425, KMS 1.2.364)</span>
                </div>
                <div className="scouter_main">
                    <div className="scouter_result">
                        <div className="scouter_result_lv1">
                            <span>환산 주스탯</span>
                            <span>46857</span>
                            <span>불스탯</span>
                            <div>
                                <span>계산하기</span>
                                <span>저장</span>
                            </div>
                        </div>
                        <div className="scouter_result_lv2">
                            <span>적용 조건</span>
                            <span className="title">기본 조건</span>
                            <div className="tag">
                                <span>시드링 착용</span>
                                <span>노도핑</span>
                                <span>풀링크</span>
                                <span>쓸만한 컴뱃 오더스 X</span>
                            </div>
                            <span className="title">직업별 버프</span>
                            <div className="tag">
                                <span>탱크 상태</span>
                                <span>메용 사용</span>
                                <span>로디스 X</span>
                            </div>
                            <span className="title">최종 데미지</span>
                            <div className="dmg">
                                <span>34%</span>
                            </div>
                        </div>
                    </div>
                    <div className="scouter_calc">
                        <div className="scouter_calc_temp">
                            <span>직업 정보</span>
                            <div className="scouter_calc_input_temp">
                                <div className="scouter_calc_input_select">
                                    <span>직업</span>
                                    <div>
                                        <select>
                                            <option>메카닉</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="scouter_calc_input_number">
                                    <span>레벨</span>
                                    <div>
                                        <input type="number" placeholder="275" />
                                    </div>
                                </div>
                            </div>
                            <div className="scouter_calc_input_slider">
                                <span>서버</span>
                                <div>
                                    <div className="scouter_calc_input_slider_div">
                                        <input type="checkbox" id={"jobinfo_paytype"} className="upload_content_checkbox" />
                                        <label htmlFor={"jobinfo_paytype"} className="upload_content_label">
                                            <span className="button1">본섭</span>
                                            <span className="button2">리부트</span>
                                            <div className="upload_toggle"></div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="scouter_calc_temp2">
                            <span>스탯 정보</span>
                            <div className="scouter_calc_input_temp">
                                <div className="scouter_calc_input_number">
                                    <span>주스텟(메용 O)</span>
                                    <div>
                                        <input type="number" placeholder="46500" />
                                    </div>
                                </div>
                                <div className="scouter_calc_input_number">
                                    <span>주스텟(메용 X)</span>
                                    <div>
                                        <input type="number" placeholder="44250" />
                                    </div>
                                </div>
                            </div>
                            <div className="scouter_calc_input_temp2">
                                <div className="scouter_calc_input_number">
                                    <span>부스텟</span>
                                    <div>
                                        <input type="number" placeholder="44250" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="scouter_calc_temp2">
                            <span>스공 정보</span>
                            <div className="scouter_calc_input_number">
                                <span>스공(메용 O)</span>
                                <div>
                                    <input type="number" placeholder="9846500" />
                                </div>
                            </div>
                            <div className="scouter_calc_input_temp">
                                <div className="scouter_calc_input_number">
                                    <span>데미지</span>
                                    <div>
                                        <input type="number" placeholder="500" />
                                    </div>
                                </div>
                                <div className="scouter_calc_input_number">
                                    <span>보공</span>
                                    <div>
                                        <input type="number" placeholder="350" />
                                    </div>
                                </div>
                            </div>
                            <div className="scouter_calc_input_temp">
                                <div className="scouter_calc_input_number">
                                    <span>방무</span>
                                    <div>
                                        <input type="number" placeholder="85.5" />
                                    </div>
                                </div>
                                <div className="scouter_calc_input_number">
                                    <span>쓸샵 후 크뎀</span>
                                    <div>
                                        <input type="number" placeholder="90" />
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scouter;