const imgEllipse375 = 'http://localhost:3845/assets/9cf554c13aa1d9a943b9d51615649ca6c55c9cc6.svg';
const imgHealth = 'http://localhost:3845/assets/2dd64d3618c5e00e5a7c20dac7d1ebec7d02c6a9.svg';
const img32X32 = 'http://localhost:3845/assets/a4fdd92987d8fdf4957ec83998b3a5f8c9b4e532.svg';
const imgHeart = 'http://localhost:3845/assets/5d374bc0736fa9e6b987a043f7126e95e0969ae7.svg';
const imgFrame283 = 'http://localhost:3845/assets/a487559af623962b944257a2eaabad6662f8ff4f.svg';
const imgVector = 'http://localhost:3845/assets/0ad63a46dd6afe0d8e7532af46e659fa8160abc5.svg';
const imgRectangle569 = 'http://localhost:3845/assets/bdfa0b7503614e0115e131065b1a57cabaf8f864.svg';
const imgLine55 = 'http://localhost:3845/assets/15d6ccc2746f85a0dcfafefb3762c439e33d865a.svg';
const imgVector101 = 'http://localhost:3845/assets/00be6c6b9736700fe484dc47a16495dbe2b6b521.svg';
const imgVector102 = 'http://localhost:3845/assets/d1416d5578f6d682fe1efa2ce7df2c572103f93c.svg';
const imgLine56 = 'http://localhost:3845/assets/ff0c65c66b15f03b21407cb6f6a6e99135652149.svg';
const imgLine52 = 'http://localhost:3845/assets/2f2485a3435bab9a8c2f519a9a7af8df62bf42ee.svg';
const imgExchange = 'http://localhost:3845/assets/30cea2d6c4820fe4d7d6614f55843f5eeef87efb.svg';
const imgP = 'http://localhost:3845/assets/52853dec10b3434119ec3672c8dea20a9a65a54e.svg';
const imgGift1 = 'http://localhost:3845/assets/e8e981d9b3f0e581d00b74be7e391d484c30f6e1.svg';
const imgVector172 = 'http://localhost:3845/assets/b02cb360adf804762d50f8f2b8cd9206daab7d70.svg';

const gradientBg = 'linear-gradient(90deg, rgba(30, 119, 132, 0.3) 0%, rgba(30, 119, 132, 0.3) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)';

const fillImg: React.CSSProperties = {
  position: 'absolute',
  display: 'block',
  maxWidth: 'none',
  width: '100%',
  height: '100%',
};

export type BenefitIconDuoType =
  | 'HSA_FSA'
  | 'HRA'
  | 'DCFSA'
  | 'LPFSA'
  | 'LSA'
  | 'Parking'
  | 'Remote Work'
  | 'Rewards'
  | 'Transit'
  | 'placeholder';

interface BenefitIconDuoProps {
  icon?: BenefitIconDuoType;
  style?: React.CSSProperties;
}

const BenefitIconDuo = ({ icon = 'HSA_FSA', style }: BenefitIconDuoProps) => {
  return (
    <div style={{ position: 'relative', width: 40, height: 40, backgroundColor: 'white', ...style }}>

      {/* HSA_FSA */}
      {icon === 'HSA_FSA' && (
        <>
          <div style={{ position: 'absolute', top: 0, left: '16.67%', right: '30%', bottom: '33.33%' }}>
            <img alt="" style={fillImg} src={imgEllipse375} />
          </div>
          <div style={{ position: 'absolute', top: '20%', left: '10%', right: '10%', bottom: 0 }}>
            <img alt="" style={fillImg} src={imgHealth} />
          </div>
        </>
      )}

      {/* HRA */}
      {icon === 'HRA' && (
        <div style={{ position: 'absolute', left: 2.08, top: 2.08, width: 35.83, height: 35.83 }}>
          <img alt="" style={fillImg} src={img32X32} />
        </div>
      )}

      {/* DCFSA */}
      {icon === 'DCFSA' && (
        <div style={{ position: 'absolute', left: 5.75, top: 6.26, width: 28, height: 28 }}>
          <img alt="" style={fillImg} src={imgHeart} />
        </div>
      )}

      {/* LPFSA */}
      {icon === 'LPFSA' && (
        <div style={{ position: 'absolute', left: 6, top: 6, width: 28, height: 28.003 }}>
          <img alt="" style={fillImg} src={imgFrame283} />
        </div>
      )}

      {/* Remote Work */}
      {icon === 'Remote Work' && (
        <div style={{ position: 'absolute', top: '-0.63%', right: '0.63%', bottom: '0.63%', left: '-0.63%', backgroundColor: 'white' }}>
          <div style={{
            position: 'absolute',
            top: '25%',
            left: '22.5%',
            right: '22.5%',
            bottom: '37.5%',
            backgroundImage: gradientBg,
          }} />
          <div style={{ position: 'absolute', top: '15%', left: '15%', right: '15%', bottom: '15%', overflow: 'hidden', padding: '3px 2px' }}>
            <div style={{ position: 'absolute', top: '8.33%', left: '4.17%', right: '4.17%', bottom: '8.33%' }}>
              <img alt="" style={fillImg} src={imgVector} />
            </div>
          </div>
        </div>
      )}

      {/* Transit */}
      {icon === 'Transit' && (
        <>
          {/* Left wheel */}
          <div style={{ position: 'absolute', left: 11.02, top: 29.25, width: 6.526, height: 6.338, border: '2px solid #0f2b4d', borderRadius: 2 }} />
          {/* Right wheel */}
          <div style={{ position: 'absolute', left: 23.07, top: 29.25, width: 6.526, height: 6.338, border: '2px solid #0f2b4d', borderRadius: 2 }} />
          {/* Bus body */}
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 5.22, width: 21, height: 26.59 }}>
            <div style={{ position: 'absolute', top: '-3.76%', left: '-4.76%', right: '-4.76%', bottom: '-3.76%' }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgRectangle569} />
            </div>
          </div>
          {/* Window */}
          <div style={{ position: 'absolute', left: 11.02, top: 10.37, width: 17.903, height: 10.931, backgroundColor: 'white', border: '2px solid #0f2b4d', borderRadius: 2 }} />
          {/* Top antenna line */}
          <div style={{ position: 'absolute', left: 16.67, top: 8.94, width: 6.106, height: 0 }}>
            <div style={{ position: 'absolute', top: -1, left: 0, right: 0, bottom: 0 }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgLine55} />
            </div>
          </div>
          {/* Left detail */}
          <div style={{ position: 'absolute', left: 6.9, top: 9.54, width: 2.532, height: 6.338 }}>
            <div style={{ position: 'absolute', top: '-11.8%', left: '-39.5%', right: '-26.23%', bottom: 0 }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector101} />
            </div>
          </div>
          {/* Right detail (mirrored) */}
          <div style={{ position: 'absolute', left: 30.5, top: 9.49, width: 2.532, height: 6.338, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ transform: 'rotate(180deg) scaleY(-1)', flexShrink: 0 }}>
              <div style={{ position: 'relative', width: 2.532, height: 6.338 }}>
                <div style={{ position: 'absolute', top: '-11.8%', left: '-39.5%', right: '-26.23%', bottom: 0 }}>
                  <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector102} />
                </div>
              </div>
            </div>
          </div>
          {/* Bottom left line */}
          <div style={{ position: 'absolute', left: 12.86, top: 28.02, width: 3.162, height: 0 }}>
            <div style={{ position: 'absolute', top: -2, left: 0, right: 0, bottom: 0 }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgLine56} />
            </div>
          </div>
          {/* Bottom right line */}
          <div style={{ position: 'absolute', left: 24.49, top: 28.02, width: 3.162, height: 0 }}>
            <div style={{ position: 'absolute', top: -2, left: 0, right: 0, bottom: 0 }}>
              <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgLine56} />
            </div>
          </div>
          {/* Center vertical line */}
          <div style={{ position: 'absolute', left: 'calc(50% - 0.94px)', top: 10.64, width: 0, height: 9.816, transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ transform: 'rotate(90deg)', flexShrink: 0 }}>
              <div style={{ position: 'relative', width: 9.816, height: 0 }}>
                <div style={{ position: 'absolute', top: -2, left: 0, right: 0, bottom: 0 }}>
                  <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgLine52} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* LSA */}
      {icon === 'LSA' && (
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 28, height: 28 }}>
          <img alt="" style={fillImg} src={imgExchange} />
        </div>
      )}

      {/* Parking */}
      {icon === 'Parking' && (
        <>
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 28,
            height: 28,
            border: '2px solid #0f2b4d',
            borderRadius: 4,
            backgroundImage: gradientBg,
          }} />
          <div style={{ position: 'absolute', left: '50%', top: 'calc(50% + 0.22px)', transform: 'translate(-50%, -50%)', width: 8, height: 10.443 }}>
            <img alt="" style={fillImg} src={imgP} />
          </div>
        </>
      )}

      {/* Rewards */}
      {icon === 'Rewards' && (
        <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 30, height: 30 }}>
          <img alt="" style={fillImg} src={imgGift1} />
        </div>
      )}

      {/* Placeholder */}
      {icon === 'placeholder' && (
        <div style={{ position: 'absolute', left: 2.32, top: 2.66, width: 35.052, height: 35.052 }}>
          <div style={{ position: 'absolute', top: '-1.01%', left: '-1.01%', right: '-1.01%', bottom: '-1.01%' }}>
            <img alt="" style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} src={imgVector172} />
          </div>
        </div>
      )}

    </div>
  );
};

export default BenefitIconDuo;
