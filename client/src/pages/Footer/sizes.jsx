import React from 'react';
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import ScrollToTop from "@/components/ui/nahoru";

export default function Sizes() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    color: 'black',
  };

  const productStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '40px',
    paddingBottom: '20px',
    width: '80%',
    borderBottom: '1px solid #ddd',
    flexWrap: 'wrap',
  };

  const imageStyle = {
    width: '100%',
    maxWidth: '300px',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '-30px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const detailsStyle = {
    flexGrow: 1,
    paddingLeft: '20px',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
    backgroundColor: 'white',
  };

  const thTdStyle = {
    padding: '12px',
    textAlign: 'center',
    border: '1px solid #ddd',
    backgroundColor: 'white',
  };

  const thStyle = {
    backgroundColor: '#f9f9f9',
    fontWeight: 'bold',
  };

  return (
    <>
      <Header />      
      <div className="container mx-auto max-w-5xl border backdrop-blur-sm shadow-[0_0_20px_5px_rgba(255,255,255,0.6)] rounded-3xl p-6 sm:p-12 mt-12 mb-12">

      <div style={containerStyle}>
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-100">Velikosti Produktů</h1>

        <div style={productStyle}>
          <div style={imageStyle}>
            <img src="src/assets/bhoodie.png" draggable="false" alt="Bhoodie" style={{ width: '100%', borderRadius: '8px',
            
                filter: "drop-shadow(0 0 10px white)"
              }} />
          </div>
          <div style={detailsStyle}>
            <table style={tableStyle}>
              <thead>
                  <tr>
                  <th style={thStyle} colSpan="3">Trička</th>
                </tr>
                <tr>
                  <th style={thStyle}>Velikost</th>
                  <th style={thStyle}>Šířka (cm)</th>
                  <th style={thStyle}>Délka (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={thTdStyle}>S</td>
                  <td style={thTdStyle}>48</td>
                  <td style={thTdStyle}>68</td>
                </tr>
                <tr>
                  <td style={thTdStyle}>M</td>
                  <td style={thTdStyle}>50</td>
                  <td style={thTdStyle}>70</td>
                </tr>
                <tr>
                  <td style={thTdStyle}>L</td>
                  <td style={thTdStyle}>52</td>
                  <td style={thTdStyle}>72</td>
                </tr>
                <tr>
                  <td style={thTdStyle}>XL</td>
                  <td style={thTdStyle}>54</td>
                  <td style={thTdStyle}>74</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={productStyle}>
          <div style={imageStyle}>
          <img src="src/assets/bhoodie.png" draggable="false" alt="Bhoodie" style={{ width: '100%', borderRadius: '8px',
            
            filter: "drop-shadow(0 0 10px white)"
          }} />          </div>
          <div style={detailsStyle}>
            <table style={tableStyle}>
              <thead>
              <tr>
                  <th style={thStyle} colSpan="3">Mikiny</th>
                </tr>
                <tr>
                  <th style={thStyle}>Velikost</th>
                  <th style={thStyle}>Šířka (cm)</th>
                  <th style={thStyle}>Délka (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={thTdStyle}>S</td>
                  <td style={thTdStyle}>52</td>
                  <td style={thTdStyle}>68</td>
                </tr>
                <tr>
                  <td style={thTdStyle}>M</td>
                  <td style={thTdStyle}>54</td>
                  <td style={thTdStyle}>70</td>
                </tr>
                <tr>
                  <td style={thTdStyle}>L</td>
                  <td style={thTdStyle}>56</td>
                  <td style={thTdStyle}>72</td>
                </tr>
                <tr>
                  <td style={thTdStyle}>XL</td>
                  <td style={thTdStyle}>58</td>
                  <td style={thTdStyle}>74</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={productStyle}>
          <div style={imageStyle}>
          <img src="src/assets/bhoodie.png" draggable="false" alt="Bhoodie" style={{ width: '100%', borderRadius: '8px',
            
            filter: "drop-shadow(0 0 10px white)"
          }} />          </div>
          <div style={detailsStyle}>
           
            <table style={tableStyle}>
              <thead>
              <tr>
                  <th style={thStyle} colSpan="3">Tepláky</th>
                </tr>
                <tr>
                  <th style={thStyle}>Velikost</th>
                  <th style={thStyle}>Pas (cm)</th>
                  <th style={thStyle}>Délka (cm)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={thTdStyle}>S</td>
                  <td style={thTdStyle}>30</td>
                  <td style={thTdStyle}>100</td>
                </tr>
                <tr>
                  <td style={thTdStyle}>M</td>
                  <td style={thTdStyle}>32</td>
                  <td style={thTdStyle}>102</td>
                </tr>
                <tr>
                  <td style={thTdStyle}>L</td>
                  <td style={thTdStyle}>34</td>
                  <td style={thTdStyle}>104</td>
                </tr>
                <tr>
                  <td style={thTdStyle}>XL</td>
                  <td style={thTdStyle}>36</td>
                  <td style={thTdStyle}>106</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div style={productStyle}>
          <div style={imageStyle}>
          <img src="src/assets/bhoodie.png" draggable="false" alt="Bhoodie" style={{ width: '100%', borderRadius: '8px',
            
            filter: "drop-shadow(0 0 10px white)"
          }} />          </div>
          <div style={detailsStyle}>

            <table style={tableStyle}>
              <thead>
              <tr>
                  <th style={thStyle} colSpan="2">Šperky</th>
                </tr>
                <tr>
                  <th style={thStyle}>Velikost</th>
                  <th style={thStyle}>Popis</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={thTdStyle}>Standardní</td>
                  <td style={thTdStyle}>Jedna velikost pro všechny</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>   </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}
