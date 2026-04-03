import React from 'react'

function LoadingPage() {

  return (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <div className="bg-white rounded-lg p-8">
                          <p className="text-xl">
                            Loading<span className="animate-bounce">.</span>
                            <span
                              className="animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            >
                              .
                            </span>
                            <span
                              className="animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            >
                              .
                            </span>
                          </p>
                        </div>
                      </div>
  )
}

export default LoadingPage;