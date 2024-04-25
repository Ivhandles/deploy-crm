import { Button, Divider, Switch, Tabs, Timeline } from 'antd'
import AddFileIcon from '../assets/Icons/AddFileIcon'
import AddUserIcon from '../assets/Icons/AddUserIcon'
import CallerIcon from '../assets/Icons/CallerIcon'
import DropdownIcon from '../assets/Icons/DropdownIcon'
import HourGlassIcon from '../assets/Icons/HourGlassIcon'
import HuluIcon from '../assets/Icons/HuluIcon'
import ImageIcon from '../assets/Icons/ImageIcon'
import './maincomponent.scss'
import BotIcon from '../assets/Icons/BotIcon'
import SpeakerIcon from '../assets/Icons/SpeakerIcon'
import SearchIcon from '../assets/Icons/SearchIcon'
import { useState } from 'react'
import UserIcon from '../assets/Icons/UserIcon'
import DownwardIcon from '../assets/Icons/DownwardIcon'
import AmazonIcon from '../assets/Icons/AmazonIcon'
import AutoPayIcon from '../assets/Icons/AutoPayIcon'
import MSwipeIcon from '../assets/Icons/MSwipeIcon'
import MailIcon from '../assets/Icons/MailIcon'
import AddressIcon from '../assets/Icons/AddressIcon'
import UnLockIcon from '../assets/Icons/UnLockIcon'
import UnLockCardIcon from '../assets/Icons/UnLockCardIcon'
import ResetPasswordIcon from '../assets/Icons/ResetPasswordIcon'
import ForwardIcn from '../assets/Icons/ForwardIcn'
import Input from 'antd/es/input/Input'
import CustomerjourneySearchIcon from '../assets/Icons/CustomerjourneySearchIcon'
import HeadPhoneIcon from '../assets/Icons/HeadPhoneIcon'
import MessageIcon from '../assets/Icons/MessageIcon'
import DollarIcon from '../assets/Icons/DollarIcon'
import ContactsIcon from '../assets/Icons/ContactsIcon'
import PromoIcon from '../assets/Icons/PromoIcon'
import AppStoreIcon from '../assets/Icons/AppStoreIcon'
import FooterMessageIcon from '../assets/Icons/FooterMessageIcon'
import FooterDollarIcon from '../assets/Icons/FooterDollarIcon'
import HistoryIcon from '../assets/Icons/HistoryIcon'
import TiltIcon from '../assets/Icons/TiltIcon'
import SettingsIcon from '../assets/Icons/SettingsIcon'
import CarryOutIcon from '../assets/Icons/CarryOutIcon'
import NotificationIcon from '../assets/Icons/NotificationIcon'
import QuestionIcon from '../assets/Icons/QuestionIcon'
import FooterBoticon from '../assets/Icons/FooterBoticon'

function maincomponent() {
  const [searchActive] = useState(false)
  const storedActiveKey = localStorage.getItem('activeTab') || '1'
  const [activeKey, setActiveKey] = useState(storedActiveKey)
  const tabs = [
    { key: '1', tab: 'Customer Summary', label: 'Customer Summary' },
    { key: '2', tab: 'Transaction History', label: 'Transaction History' },
  ]
  const onChange = (key: string) => {
    setActiveKey(key)
    localStorage.setItem('activeTab', key)
  }
  const [username] = useState('Natasha')
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded)
  }
  return (
    <div className="main-div">
      <div className="sidebar-div">
        <div className="sidebar-first-content-div">
          <div>
            <HuluIcon />
          </div>
          <div className="first-text-styles">Hulu Bank</div>
        </div>
        <div className="sidebar-second-content-div">
          <div>
            <CallerIcon />
          </div>
          <div className="second-content-text-div">
            ID : 1234-ABCD
            <div>
              <DropdownIcon />
            </div>
          </div>
        </div>

        <div className="sidebar-third-content-div">
          <div className="third-content-text-div">Quick Access</div>
          <div className="third-content-icons-div">
            <div>
              <AddFileIcon />
            </div>
            <div>
              <AddUserIcon />
            </div>
            <div>
              <HourGlassIcon />
            </div>
            <div>
              <ImageIcon />
            </div>
          </div>
        </div>
        <Divider />

        <div className="helper-bot-div">
          <div className="helper-bot-text">
            ...........................................................
          </div>
          <div className="helper-bot-inner-container">
            <div className="helper-bot-sender-info">
              <div className="helper-bot-sender-info-img">
                <BotIcon />
              </div>
              <div className="helper-bot-sender-details">
                <div className="helper-bot-send-by">Send By</div>
                <div className="helper-bot-name">Helper Bot</div>
              </div>
            </div>
            <div className="helper-bot-indicator">
              <Switch />
            </div>
          </div>
          <div className="helper-bot-text">
            ...........................................................
          </div>
        </div>

        <div className="user-info-div">
          <div className="username-div"> Mr. Tony Stark</div>
          <div className="time-div">03:47pm</div>
        </div>
        <div className="user-msg-div">
          <p className="user-msg-text-div">Hey there ..</p>
          <p className="user-msg-text-div">
            Not happy with your credit card services as I am not getting loyalty points since last 3
            months.
          </p>
        </div>
        <div className="user-msg-div-2">
          <p className="user-msg-text-div-2">
            and also I want to change my name on my credit card as it is got misprinted.
          </p>
        </div>

        <div className="msg-input-container">
          <input className="msg-input-container-text" placeholder="Please Enter your message" />
          <div className="msg-input-container-img">
            <SpeakerIcon />
          </div>
        </div>
      </div>
      <div className="content-2-div">
        <div className="content-div">
          <div className="head-search-container">
            <div className="head-img-container ">
              <SearchIcon />
            </div>

            <input
              type="text"
              placeholder="Type search parameter (Account, CTN, BAN etc.)"
              className={`head-text-container ${searchActive ? 'search-active' : ''}`}
              style={{ color: searchActive ? 'black' : 'white' }}
            />

            <div className="head-user-container">
              <div>
                <UserIcon />
              </div>
              <div className="head-username-text">{username}</div>
            </div>
          </div>
        </div>
        <div className="main-sub-div">
          <div className="sub-data-container">
            <div className="sub-data-inner-container">
              <div className="sub-data-gap-container">
                <div className="line"></div>
                <div className="sub-dataleft-content">
                  <div className="left-image-container">
                    <div className="left-user-text">Mr. John Stanely</div>
                    <div className="downward-icon-styles" onClick={toggleExpansion}>
                      <DownwardIcon />
                    </div>
                  </div>
                  <div className="left-text-container">
                    <div className="left-subtext">ACC: 234891389</div>
                    <div className="tag-lc">LOYAL CUSTOMER</div>
                  </div>
                </div>
                <div className="tag-fc">FREQUENT CALLER</div>
                <div className="sub-data-right-container">
                  <div className="sub-data-right-item">
                    <div className="amount">
                      <div className="currency">$</div>
                      <div className="value">190</div>
                    </div>
                    <div className="description">Amount Due</div>
                  </div>
                  <div className="sub-data-right-item">
                    <div className="due-amount">
                      <div className="currency">$</div>
                      <div className="value">25</div>
                    </div>
                    <div className="description">Due Immediately</div>
                  </div>
                  <div className="sub-data-right-item">
                    <div className="day-amount">
                      <div className="value">03</div>
                    </div>
                    <div className="description">Due Days Left</div>
                  </div>
                  <div className="sub-data-right-item">
                    <div className="active-amount">
                      <div className="value">04</div>
                    </div>
                    <div className="description">Active Lines</div>
                  </div>
                  <div className="sub-data-right-item">
                    <div className="amount">
                      <div className="value">
                        <MSwipeIcon />
                      </div>
                    </div>
                    <div className="mswipe-description">mSwipe</div>
                  </div>
                  <div className="sub-data-right-item">
                    <div className="amount">
                      <div className="autopay-value">
                        <AutoPayIcon />
                      </div>
                    </div>
                    <div className="autopay-description">AutoPay</div>
                  </div>
                  <div className="sub-data-right-item">
                    <div className="amount">
                      <div className="case-value">0</div>
                    </div>
                    <div className="description">Open Cases</div>
                  </div>
                  <div className="sub-data-right-item">
                    <div className="amount">
                      <div className="amazon-value">
                        <AmazonIcon />
                      </div>
                    </div>
                    <div className="amazon-description">Amazon</div>
                  </div>
                </div>
              </div>
              {isExpanded && (
                <div className="bank-details-container">
                  <div className="bank-details-flex">
                    <div className="bank-details-custom-flex-col">
                      <div className="bank-details-inner-item">
                        <div className="bank-details-container">
                          <div className="bank-details-title">Contact Details</div>
                          <div className="details-div">
                            <div className="bank-mail-div">
                              <MailIcon />
                            </div>
                            <div className="bank-user-div">John.stanely@starkvalue.com</div>
                          </div>
                          <div className="details-div">
                            <div className="bank-mail-div">
                              <AddressIcon />
                            </div>
                            <div className="bank-user-div">
                              10880 Malibu Point, 90265, California, USA
                            </div>
                          </div>
                        </div>
                        <div className="bank-account-container">
                          <div className="bank-details-title">Account No : 234891389</div>

                          <div className="account-div">
                            <div className="bank-user-div">Balance : $5120.90</div>
                            <div className="bank-user-div">Type : Individual / Savings</div>
                            <div className="bank-user-div">Status : Active</div>
                          </div>
                        </div>
                        <div className="bank-payment-container">
                          <div className="bank-account-title">Payments</div>
                          <div className="bank-account-details-div">
                            <div className="bank-user-div">
                              Next EMI Bill Cycle Date : 21 / 09 / 2024
                            </div>
                            <div className="bank-user-div">Next Payment Amount : $25</div>
                            <div className="bank-user-div">Last Payment Channel : mSwipe</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="links-list">
                      <li className="link">Setup Auto Pay</li>
                      <li className="link">Set Up QuickPay</li>
                      <li className="link">Bill Pay Methods</li>
                      <li className="link">Suspend & Restore Service</li>
                      <li className="link">Charges & Fees</li>
                    </ul>
                    <div className="custom-div">
                      <p className="dotted-text">Promotional Banner</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="content-2-and-timeline-main-div">
              <div className="content-2-div-sec-div">
                <div className="small-card-div">
                  <div className="small-card-div-2">
                    <div className="small-card-div-3">
                      Unlock
                      <br />
                      Account
                    </div>
                    <UnLockIcon />
                  </div>
                  <div className="small-card-div-4">
                    <div className="small-card-div-5">
                      Unlock
                      <br />
                      Card
                    </div>
                    <div className="unlock-card-img">
                      <UnLockCardIcon />
                    </div>
                  </div>
                  <div className="small-card-div-6">
                    <div className="small-card-div-7">Reset Internet Banking Password</div>
                    <ResetPasswordIcon />
                  </div>
                </div>
                <div className="tabs-div">
                  <Tabs
                    defaultActiveKey={activeKey}
                    onChange={onChange}
                    animated={false}
                    moreIcon={<span className="more-icon"></span>}
                    items={tabs}
                  >
                    {tabs.map((tab) => (
                      <Tabs.TabPane key={tab.key} tab={tab.tab} />
                    ))}
                  </Tabs>
                </div>
                <div className="cs-vs-ra-div">
                  <div className="cs-vc-div">
                    <div className="customer-summary-main-div">
                      <div className="customer-summary-div-2">
                        <div className="customer-summary-column">
                          <div className="customer-summary-div-3">
                            <div className="customer-summary-div-4">
                              Number of accounts
                              <br />
                              Account credit available
                              <br />
                              Account type
                              <br />
                              Marketing preferences
                              <br />
                            </div>
                            <div className="customer-summary-div-5">
                              : 4
                              <br />
                              : $ 5120.90
                              <br />
                              : Individual / Savings
                              <br />
                              : Yes
                              <br />
                            </div>
                          </div>
                        </div>
                        <div className="customer-summary-column-2">
                          <div className="customer-summary-column-2-div-6">
                            <div className="customer-summary-column-2-div-7">
                              Last transaction
                              <br />
                              Payment date
                              <br />
                              Customer since
                              <br />
                              Preferred payment type
                            </div>
                            <div className="customer-summary-column-2-div-8">
                              : 30 Aug 2023
                              <br />
                              : 03 Sep 2023
                              <br />
                              : 19 Dec 2019
                              <br />: Credit Card, mSwipe
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="value-center-div">
                      <div className="value-center-header">
                        <div className="value-center-text">Value Center</div>
                        <div className="pagination-div">
                          <div className="pagination-text">Showing 4 out of 25</div>
                          <div className="pagination-icon-div">
                            <ForwardIcn />
                          </div>
                        </div>
                      </div>
                      <div className="value-center-content-div">
                        <div className="value-center-cards">
                          <div className="value-center-content-1-div">
                            <div className="value-center-content-firts-card">
                              <div className="value-center-content-firts-card-div-1">
                                Introducing Easy Home loans on hulu bank.
                              </div>
                              <div className="value-center-content-firts-card-div-2">
                                <div>
                                  <HuluIcon />
                                </div>
                              </div>
                            </div>
                            <div className="value-center-content-firts-card-div-3">
                              Redeem promo code at hbomax.com. HBO Max auto-renews after 30 days at
                              then prevailing rate unless you cancel through HBO Max.
                            </div>
                            <div className="value-center-content-firts-card-div-4">
                              GENERATE CODE
                            </div>
                          </div>

                          <div className="value-center-content-2-div">
                            <div className="value-center-content-2-div-1">
                              <div className="white-round"></div>
                              <div className="value-center-content-2-div-2">
                                <div className="value-center-content-2-div-3">
                                  -----------------
                                </div>
                                <div className="value-center-content-2-div-4">
                                  Netflix
                                  <br />
                                  Free Subscription
                                </div>
                                <div className="value-center-content-2-date-div">
                                  <div className="value-center-content-2-div-5">
                                    -----------------
                                  </div>
                                  <div className="value-center-content-2-div-6">
                                    Use By 02 Oct 2020
                                  </div>
                                </div>
                              </div>
                              <div className="value-center-content-2-div-7">
                                ..........................
                              </div>
                              <div className="value-center-content-2-div-8">Offer Expired</div>
                            </div>
                            <div className="white-round-right"></div>
                          </div>
                          <div className="value-center-content-2-div">
                            <div className="value-center-content-2-div-1">
                              <div className="white-round"></div>
                              <div className="value-center-content-2-div-2">
                                <div className="value-center-content-2-div-3">
                                  -----------------
                                </div>
                                <div className="value-center-discount-div">
                                  15% Discount
                                  <br />
                                  <div style={{ width: '260px' }}> On 1st March Payment</div>
                                </div>
                                <div className="value-center-content-2-date-div">
                                  <div className="value-center-content-2-div-5">
                                    -----------------
                                  </div>
                                  <div className="value-center-content-2-div-6">
                                    Use By 02 Oct 2020
                                  </div>
                                </div>
                              </div>
                              <div className="value-center-content-2-div-7">
                                ..........................
                              </div>
                              <div className="value-center-content-pay">Pay Now</div>
                            </div>
                            <div className="white-round-right"></div>
                          </div>

                          <div className="value-center-content-2-div">
                            <div className="value-center-content-2-div-1">
                              <div className="white-round"></div>
                              <div className="value-center-content-2-div-2">
                                <div className="value-center-content-2-div-3">
                                  -----------------
                                </div>
                                <div className="value-center-discount-div">
                                  Spotify Music
                                  <br />
                                  <div style={{ width: '260px' }}>3 Months Free Trial</div>
                                </div>
                                <div className="value-center-content-2-date-div">
                                  <div className="value-center-content-2-div-5">
                                    -----------------
                                  </div>
                                  <div className="value-center-content-2-div-6">
                                    Use By 02 Oct 2020
                                  </div>
                                </div>
                              </div>
                              <div className="value-center-content-2-div-7">
                                ..........................
                              </div>
                              <div className="value-center-reedem">REDEEM LOYALTY POINT</div>
                            </div>
                            <div className="white-round-right"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recommendation-div">
                    <div className="recommendation-div-1">recommended actions</div>
                    <div className="recommendation-div-2">Setup AutoPay</div>
                    <div className="recommendation-div-3">
                      Due Date : 22 Oct 2020
                      <br />
                      Reason : EMI Due Days Left, Payments
                    </div>
                    <div className="recommendation-div-4">
                      <div className="recommendation-div-5">Take Action</div>
                      <div className="recommendation-div-6">Not Relevant</div>
                    </div>
                    <div className="recommendation-div-7">
                      ............................................
                    </div>
                    <div className="recommendation-div-8">Take Payment</div>
                    <div className="recommendation-div-9">
                      Amount Due : $ 190
                      <br />
                      Reason : Due Immediately
                    </div>
                    <div className="recommendation-div-10">
                      <div className="recommendation-div-11">Take Action</div>
                      <div className="recommendation-div-12">Not Relevant</div>
                    </div>
                    <div className="recommendation-div-13">
                      ...........................................
                    </div>
                    <div className="recommendation-div-14">Change Rate Plan</div>
                    <div className="recommendation-div-15">
                      Number : 784 764 5533
                      <br />
                      Reason : Credit History, Payments
                    </div>
                    <div className="recommendation-div-16">
                      <div className="recommendation-div-17">Take Action</div>
                      <div className="recommendation-div-18">Not Relevant</div>
                    </div>
                  </div>
                </div>
                <div className="last-content-div">
                  <div className="last-content-header-div">
                    <div className="last-content-header-text-div">
                      Personalised Offers for This Customer
                    </div>
                    <div className="last-content-header-sub-div">
                      <div className="last-content-header-sub-div-text">3 / 9</div>
                      <div>
                        <ForwardIcn />
                      </div>
                    </div>
                  </div>
                  <div className="last-content-conatiner-div">
                    <div className="last-content-conatiner-div-1">
                      <div className="last-content-conatiner-div-1-c-1">
                        Because customer is interested in Travel
                      </div>
                      <div className="last-content-conatiner-div-1-c-2">
                        Flat 20% off on domestic flights
                      </div>
                      <div className="last-content-conatiner-div-1-c-3">
                        <div className="last-content-conatiner-div-1-c-3-text">
                          Additional 5% off if pay using our pay services
                        </div>
                        <div>
                          <Button>Get Offer</Button>
                        </div>
                      </div>
                    </div>
                    <div className="last-content-conatiner-div-2">
                      <div className="last-content-conatiner-div-2-c-1">
                        Because customer is using mSwipe Cards
                      </div>
                      <div className="last-content-conatiner-div-2-c-2">
                        Shop, Swipe and Earn 1000 Reward Points
                      </div>
                      <div className="last-content-conatiner-div-2-c-3">
                        <div className="last-content-conatiner-div-2-c-3-text">
                          1000 reward points after 5 successfull transactions using mSwipe Cards
                        </div>
                        <div>
                          <Button>UPGRADE</Button>
                        </div>
                      </div>
                    </div>
                    <div className="last-content-conatiner-div-3">
                      <div className="last-content-conatiner-div-3-c-1">
                        Because customer is have business account
                      </div>
                      <div className="last-content-conatiner-div-3-c-2">
                        GrayHR Offer- Get discount on new subscription
                      </div>
                      <div className="last-content-conatiner-div-3-c-3">
                        <div className="last-content-conatiner-div-3-c-3-text">
                          GrayHR Offer- Get discount on new subscription
                        </div>
                        <div>
                          <Button>BUY NOW</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-timeline-div">
                <div className="timeline-content">
                  <div className="content-timeline-div-header">Customer Journey</div>
                  <div className="div">
                    <div className="div-2">
                      <div className="search-icon"> <CustomerjourneySearchIcon /></div>
                     
                      <Input
                        placeholder="Search"
                        className={`div-3 ${searchActive ? 'search-active' : ''}`}
                        style={{ color: searchActive ? 'white' : 'black' }}
                      />
                    </div>
                    <div className="div-4">
                      <div className="date">19 Aug - 11 Sep</div>
                    </div>
                  </div>
                  <div className="filter">
                    <div>Filter By</div>
                    <div>
                      <DropdownIcon />
                    </div>
                  </div>
                  <Divider/>
                  <div className="timeline-data">
                  <div>September 2020</div>
                  <Timeline
                    items={[
                      {
                        dot: <HeadPhoneIcon />,
                        children: (
                          <>
                            <p>Phone Interaction : Payment</p>
                            <p>Sep 08 2020, 09:43:49 am</p>
                            <Button>View Memo</Button>
                          </>
                        ),
                      },
                      {
                        dot: null,
                        
                      }
                    ]}
                  />
                  <div>August 2020</div>
                   <Timeline
                    items={[
                      {
                        dot: <HeadPhoneIcon />,
                        children: (
                          <>
                            <p>Phone Interaction : Payment</p>
                            <p>Sep 08 2020, 09:43:49 am</p>
                            <Button>View Memo</Button>
                          </>
                        ),
                      },
                      {
                        dot: <MessageIcon />,
                        children: (
                          <>
                            <p>Phone Interaction : Payment</p>
                            <p>Sep 08 2020, 09:43:49 am</p>
                            <Button>View Memo</Button>
                          </>
                        ),
                      },
                      {
                        dot: <DollarIcon />,
                        children: (
                          <>
                            <p>Phone Interaction : Payment</p>
                            <p>Sep 08 2020, 09:43:49 am</p>
                          
                          </>
                        ),
                      },
                      {
                        dot: <ContactsIcon />,
                        children: (
                          <>
                            <p>Phone Interaction : Payment</p>
                            <p>Sep 08 2020, 09:43:49 am</p>
                            <Button>View Details</Button>
                          </>
                        ),
                      },
                      
                    ]}
                  />
                  </div>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-styles">
        <div className="right-footer-icons">
<div><AppStoreIcon/></div>
<div><FooterMessageIcon/></div>
<div><FooterDollarIcon/></div>
<div><HistoryIcon/></div>
<div><TiltIcon/></div>
<div><SettingsIcon/></div>
        </div>
        <div className="left-footer-icons">
          <div><CarryOutIcon/></div>
          <div><NotificationIcon/></div>
          <div><QuestionIcon/></div>
          <div><FooterBoticon/></div>
        </div>
      </footer>
    </div>
  )
}

export default maincomponent
