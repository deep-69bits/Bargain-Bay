import React from 'react';

const ChatComponent: React.FC = () => {
  return (
    <div>
      <div className="w-full h-32" style={{ backgroundColor: '#449388' }}></div>

      <div className="container mx-auto" style={{ marginTop: '-128px' }}>
        <div className="py-6 h-screen">
          <div className="flex border border-grey rounded shadow-lg h-full">

            {/* Left */}
            <div className="w-1/3 border flex flex-col">

              {/* Header */}
              <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                <div>
                  <img className="w-10 h-10 rounded-full" src="http://andressantibanez.com/res/avatar.png" />
                </div>

                <div className="flex">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#727A7E" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path opacity=".55" fill="#263238" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg>
                  </div>
                  <div className="ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="#263238" fillOpacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg>
                  </div>
                </div>
              </div>

              {/* Search */}
              <div className="py-2 px-2 bg-grey-lightest">
                <input type="text" className="w-full px-2 py-2 text-sm" placeholder="Search or start new chat" />
              </div>

              {/* Contacts */}
              <div className="bg-grey-lighter flex-1 overflow-auto">
                {/* Contacts list */}
              </div>

            </div>


            {/* Right */}
            <div className="w-2/3 border flex flex-col">
              {/* Header */}
              <div className="py-2 px-3 bg-grey-lighter flex flex-row justify-between items-center">
                {/* Header content */}
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-auto" style={{ backgroundColor: '#DAD3CC' }}>
                {/* Messages content */}
              </div>
               

                <div>
                {/* Input */}
                <div className="bg-grey-lighter px-4 py-4 flex items-center">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path opacity=".45" fill="#263238" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z"></path>
                    </svg>
                    </div>
                    <div className="flex-1 mx-4">
                    <input className="w-full border rounded px-2 py-2" type="text" />
                    </div>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="#263238" fillOpacity=".45" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path>
                    </svg>
                    </div>
                </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
