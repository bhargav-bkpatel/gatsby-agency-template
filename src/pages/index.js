import React from 'react'

import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import ServicesCard from '../components/services-card'
import PortofolioCard from '../components/portofolio-card'
import BlogCard from '../components/blog-card'
import projectStyles from '../style.module.css'
import styles from './index.module.css'

const Home = (props) => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Creative Agency Page</title>
        <meta property="og:title" content="Creative Agency Page" />
      </Helmet>
      <Navigation></Navigation>
      <main className={styles['Main']}>
        <div
          className={` ${styles['Hero']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container']}>
              <h1
                className={` ${styles['text']} ${projectStyles['heading1']} `}
              >
                <span>We are a creative agency based</span>
                <br></br>
                <span>in Massachusetts</span>
              </h1>
              <span className={styles['text03']}>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </span>
                <br></br>
                <span>
                  {' '}
                  tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </span>
              <button
                className={` ${styles['primary']} ${projectStyles['button-primary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
              >
                Get in touch with us
              </button>
            </div>
            <div className={styles['Gallery']}>
              <div className={styles['container1']}>
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095-1000w.png"
                  className={styles['image']}
                />
              </div>
              <div className={styles['container2']}>
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095%20%5B1%5D-1000w.png"
                  className={styles['image1']}
                />
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095%20%5B2%5D-1000w.png"
                  className={styles['image2']}
                />
              </div>
              <div className={styles['container3']}>
                <img
                  alt="image"
                  src="/playground_assets/rectangle%2095%20%5B3%5D-1000w.png"
                  className={styles['image3']}
                />
                <div className={styles['container4']}>
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095%20%5B4%5D-1000w.png"
                    className={styles['image4']}
                  />
                  <img
                    alt="image"
                    src="/playground_assets/rectangle%2095%20%5B5%5D-1000w.png"
                    className={styles['image5']}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['Services']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width1']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['heading-container1']}>
              <div className={styles['text-container']}>
                <span className={styles['text07']}>our services</span>
                <h2 className={projectStyles['heading2']}>
                  <span>
                    We provide a wide range of
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>creative solutions</span>
                </h2>
              </div>
              <div className={styles['controls']}>
                <button className={projectStyles['control-btn']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                    <path d="M402.746 877.254l-320-320c-24.994-24.992-24.994-65.516 0-90.51l320-320c24.994-24.992 65.516-24.992 90.51 0 24.994 24.994 24.994 65.516 0 90.51l-210.746 210.746h613.49c35.346 0 64 28.654 64 64s-28.654 64-64 64h-613.49l210.746 210.746c12.496 12.496 18.744 28.876 18.744 45.254s-6.248 32.758-18.744 45.254c-24.994 24.994-65.516 24.994-90.51 0z"></path>
                  </svg>
                </button>
                <button className={projectStyles['control-btn']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon02']}>
                    <path d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles['cards-container']}>
              <ServicesCard></ServicesCard>
              <ServicesCard
                text="Copy-writting"
                image_src="/playground_assets/file-document-200w.png"
              ></ServicesCard>
              <ServicesCard
                text="Product Design"
                image_src="/playground_assets/dice-5-200h.png"
              ></ServicesCard>
            </div>
          </div>
        </div>
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-width2']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['text-container1']}>
              <span className={styles['text12']}>our work</span>
              <h2
                className={` ${styles['text13']} ${projectStyles['heading2']} `}
              >
                <span>Explore our portfolio</span>
              </h2>
              <span className={styles['text15']}>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation.
                </span>
              </span>
              <button
                className={` ${projectStyles['button-secondary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
              >
                See all projects
              </button>
            </div>
            <div className={styles['tab-selector-header']}>
              <span
                className={` ${styles['text19']} ${projectStyles['tab-selector-btn']} `}
              >
                Advertising
              </span>
              <span
                className={` ${styles['text20']} ${projectStyles['tab-selector-btn']} `}
              >
                Social Media
              </span>
              <span
                className={` ${styles['text21']} ${projectStyles['tab-selector-btn']} `}
              >
                Branding
              </span>
              <span
                className={` ${styles['text22']} ${projectStyles['tab-selector-btn']} `}
              >
                UI / UX
              </span>
              <span
                className={` ${styles['text23']} ${projectStyles['tab-selector-btn']} `}
              >
                Packaging
              </span>
              <span className={projectStyles['tab-selector-btn']}>
                Product Design
              </span>
            </div>
            <div className={styles['tab-selector-cards-container']}>
              <PortofolioCard
                image_src="/playground_assets/unsplash_qj15unotnh0-400h.png"
                rootClassName="rootClassName"
              ></PortofolioCard>
              <PortofolioCard
                image_src="/playground_assets/unsplash_wwqrpsnbpq4-400h.png"
                project_title="A brand-new advertising idea"
                rootClassName="rootClassName5"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxjb2NhJTIwY29sYXxlbnwwfHx8fDE2NDY5MjYyNTM&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Coca-Cola Summer Concept Campaign - 2021"
                rootClassName="rootClassName4"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1519420573924-65fcd45245f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG51dGVsbGF8ZW58MHx8fHwxNjQ2OTI2MTky&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Ad Campaign - I love you as much as I love Nutella"
                rootClassName="rootClassName3"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1567103472667-6898f3a79cf2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGNvY2ElMjBjb2xhfGVufDB8fHx8MTY0NjkyNjI1Mw&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Coca-Colla Next Door Campaign - conceptual"
                rootClassName="rootClassName2"
              ></PortofolioCard>
              <PortofolioCard
                image_src="https://images.unsplash.com/photo-1545231027-637d2f6210f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHN0YXJidWNrc3xlbnwwfHx8fDE2NDY5MjYyMzc&amp;ixlib=rb-1.2.1&amp;h=400"
                project_title="Starbucks secret is a smile when you get your latte"
                rootClassName="rootClassName1"
              ></PortofolioCard>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['About']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width3']} ${projectStyles['max-content-container']} `}
          >
            <div className={styles['text-container2']}>
              <span className={styles['text25']}>about us</span>
              <h2
                className={` ${styles['text26']} ${projectStyles['heading2']} `}
              >
                <span>
                  We build brands with
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>purpose and impact</span>
              </h2>
              <span className={styles['text30']}>
                We are a full-service digital creative agency with brick and
                mortar offices and plenty of in-house talent.
              </span>
              <div className={styles['checklist']}>
                <div className={styles['check-item']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon04']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text31']}>
                    Quality services and support all time
                  </span>
                </div>
                <div className={styles['check-item1']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon06']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text32']}>
                    Long-term strategy development
                  </span>
                </div>
                <div className={styles['check-item2']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon08']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text33']}>
                    FREE Brand Audit for startups
                  </span>
                </div>
                <div className={styles['check-item3']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon10']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text34']}>
                    Over 10 years in the business
                  </span>
                </div>
                <div className={styles['check-item4']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon12']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text35']}>
                    Future-Proofing Projects
                  </span>
                </div>
                <div className={styles['check-item5']}>
                  <svg viewBox="0 0 1024 1024" className={styles['icon14']}>
                    <path d="M384 690l452-452 60 60-512 512-238-238 60-60z"></path>
                  </svg>
                  <span className={styles['text36']}>
                    Support in any implementation
                  </span>
                </div>
              </div>
            </div>
            <div className={styles['image-container']}>
              <img
                alt="image"
                src="/playground_assets/rectangle%20109-1000w.png"
                className={styles['image6']}
              />
            </div>
          </div>
        </div>
        <div
          className={` ${styles['Process']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width4']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text37']}>Our process</span>
            <h2
              className={` ${styles['text38']} ${projectStyles['heading2']} `}
            >
              <span>
                We use a simple three step process.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>Take a look.</span>
            </h2>
            <div className={styles['step']}>
              <span className={styles['text42']}>01</span>
              <div className={styles['container5']}>
                <span className={styles['text43']}>Finding the best idea</span>
                <span className={styles['text44']}>
                  There are countless businesses already in existence, so it’s
                  very likely that you won’t be the first person to think of an
                  idea or product. There are countless businesses already in
                  existence, so it’s very likely that you won’t be the first
                  person to think of an idea or product.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
            </div>
            <div className={styles['step1']}>
              <span className={styles['text45']}>02</span>
              <div className={styles['container6']}>
                <span className={styles['text46']}>
                  Intense Brain storming
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className={styles['text47']}>
                  Brainstorming is a process of toiling and generating new ideas
                  alone or by holding intensive group discussions between team
                  members in a team.
                </span>
              </div>
            </div>
            <div className={styles['step2']}>
              <span className={styles['text48']}>03</span>
              <div className={styles['container7']}>
                <span className={styles['text49']}>
                  Strong design execution
                </span>
                <span className={styles['text50']}>
                  As a creative, using your professional judgement, you should
                  begin filtering your various ideas and designs, retaining the
                  strongest relevant material.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={projectStyles['section-container']}>
          <div
            className={` ${styles['max-width5']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text51']}>from blog</span>
            <h2
              className={` ${styles['text52']} ${projectStyles['heading2']} `}
            >
              <span>Our latest articles and resources</span>
            </h2>
            <span className={styles['text54']}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <button
              className={` ${styles['primary2']} ${projectStyles['button-secondary']} ${projectStyles['button-lg']} ${projectStyles['button']} `}
            >
              Explore the blog
            </button>
            <div className={styles['blog-cards-container']}>
              <BlogCard rootClassName="rootClassName"></BlogCard>
              <BlogCard
                text1="Aug 14, 2022"
                button="advertising"
                image_src="/playground_assets/rectangle%2099%20%5B1%5D-1500w.png"
                rootClassName="rootClassName1"
              ></BlogCard>
              <BlogCard
                text1="Jul 12, 2022"
                button="Branding"
                image_src="/playground_assets/unsplash_h7qmwoxf6z8-1500w.png"
              ></BlogCard>
            </div>
          </div>
        </div>
        <div
          className={` ${styles['Banner']} ${projectStyles['section-container']} `}
        >
          <div
            className={` ${styles['max-width6']} ${projectStyles['max-content-container']} `}
          >
            <span className={styles['text58']}>what are you waiting?</span>
            <h2
              className={` ${styles['text59']} ${projectStyles['heading2']} `}
            >
              <span>Let’s collaborate!</span>
            </h2>
            <span className={styles['text61']}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation.
              </span>
            </span>
            <button
              className={` ${styles['primary3']} ${projectStyles['button-lg']} ${projectStyles['button-secondary-white']} ${projectStyles['button']} `}
            >
              Contact us
            </button>
          </div>
        </div>
      </main>
      <div className={projectStyles['section-container']}>
        <div className={projectStyles['max-content-container']}>
          <div className={styles['top-part']}>
            <div className={styles['links-container']}>
              <div className={styles['product-container']}>
                <span className={styles['text65']}>Product</span>
                <span className={styles['text66']}>About</span>
                <span className={styles['text67']}>Portofolio</span>
                <span>Blog</span>
              </div>
              <div className={styles['navigate-container']}>
                <span className={styles['text69']}>Navigate</span>
                <span className={styles['text70']}>Copyrights</span>
                <span className={styles['text71']}>Sitemap</span>
                <span>Privacy Policy</span>
              </div>
              <div className={styles['contact-container']}>
                <span className={styles['text73']}>Contact Us</span>
                <span className={styles['text74']}>
                  <span>2157 Village View</span>
                  <br></br>
                  <span>
                    Drive, Old Fort
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    Myers Florida
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>33901</span>
                </span>
              </div>
            </div>
            <div className={styles['subscribe-container']}>
              <span className={styles['text82']}>
                Subscribe to our newsletter
              </span>
              <input
                type="text"
                placeholder="Enter your e-mail address"
                className={` ${styles['textinput']} ${projectStyles['input']} `}
              />
              <button
                className={` ${projectStyles['button-primary']} ${projectStyles['button']} `}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className={styles['Separator']}></div>
        <footer
          className={` ${styles['max-width8']} ${projectStyles['max-content-container']} `}
        >
          <img
            alt="image"
            src="/playground_assets/logo1-200h.png"
            className={styles['image7']}
          />
          <span className={styles['text83']}>
            <span>
              All rights recived @
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text85']}>
              aesthetics
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>
              | Designed by
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className={styles['text87']}>teleporhq.io</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Home
