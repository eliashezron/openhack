import './App.css'
import { useNavigate } from 'react-router-dom'
import LayoutComponent from './components/Layout'
import { useRef, useState } from 'react'
import { verify } from './utils/verify'
import { useEthers } from '@usedapp/core'

export default function App() {
  let navigate = useNavigate()
  // let history = useHistory()
  const [proof, setProof] = useState(null)
  const [file, setFile] = useState(null)
  const fileInputRef = useRef(null)
  const { library } = useEthers()

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  const handleCancelClick = () => {
    setFile(null)
  }

  const handleUploadClick = () => {
    // Upload the file here...
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const pdfData = event.target.result
        console.log(pdfData)
      }
      reader.readAsDataURL(file)
    }
  }
  const handleSubmit = async () => {
    let proofx = [
      [
        '0x0b038711ad3fe3743f0282b709f0ba110b2ab7d2e845285a474ef35e320e7de0',
        '0x02fd6c2fde59f0f0061e99fad9814207f7a27573989060f12f06de7dee1a56b0',
      ],
      [
        [
          '0x0f81500b59bcf153143bc791d79bc8692f6440c88758bae918058aa5b2070fcb',
          '0x257fc4f3a6aaa56e90c70184887f695fb2b77b9350faea913e29035cd704ba99',
        ],
        [
          '0x0a13327b326030e6aa474b036dc69a20b140f15df0df53def54295dec75ae01a',
          '0x1c90fb09a140ea7dfaa8ce789ece9421db826002932a739c261616f9707ffbf1',
        ],
      ],
      [
        '0x251b9f0c7d85dbcc63f17c61bf23b2f68aae136bc8184cf15e919c59e4840f58',
        '0x2b820d0207ddbf2964721c08c7a9831f8b0f9a9dfe4906a1074d9dc398587be4',
      ],
    ]
    let input = [
      '0x0000000000000000000000000000000000000000000000000000000000000002',
    ]

    const x = await verify(library, proofx, input)
    if (x === true) {
      let path = `/profile`
      navigate(path)
      // return (history.push = '/profile')
    }
  }

  return (
    <LayoutComponent>
      <div className="flex flex-1 h-screen flex-col items-center justify-evenly">
        <div className="flex w-1/2 border-1 border-primaryText h-1/2 rounded-md items-center justify-center">
          {!file ? (
            <>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="absolute cursor-pointer opacity-0"
              />
              <button
                onClick={handleButtonClick}
                className="border-1 border-dashed p-3 px-12 rounded-full text-primaryText font-medium border-primaryText "
              >
                Upload Doc
              </button>
            </>
          ) : (
            <>
              <div>
                <p className="text-primaryText">Selected file: {file.name}</p>
                <div className="flex flex-row mt-5">
                  <button
                    onClick={handleUploadClick}
                    className="text-white w-full mr-2 rounded-md text-sm bg-blue-300"
                  >
                    Upload
                  </button>
                  <button
                    onClick={handleCancelClick}
                    className="w-full bg-red-500 py-1 ml-2 text-sm text-white rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* <h1 className="text-2xl text-white">OR</h1> */}

        <div className="flex flex-row items-center justify-center">
          <input
            type="json"
            placeholder="Enter proof here..."
            className="text-gray-300 rounded-md px-4 bg-primaryLight  p-2 ml-2 outline-none"
            onChange={(event) => setProof(event.target.value)}
          />
          <button
            className="bg-blue-300 px-3 py-2 ml-3 text-white rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
          {/* <Link
            to={`/profile`}
            className="bg-blue-500 px-5 py-2 ml-3 text-white rounded-md"
          >
            Submit
          </Link> */}
        </div>
      </div>
    </LayoutComponent>
  )
}

// function App(props) {
//   return (
//     <div className="App">
//       <Router>
//         <Switch>
//           <Route path='/home'>
//             <Header />
//             <Home />
//           </Route>
//         </Switch>
//       </Router>
//     </div>
//   );
// }
