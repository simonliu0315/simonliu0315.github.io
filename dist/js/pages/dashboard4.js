/* global Chart:false */

$(function () {
  'use strict'

  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */

  //-----------------------
  // - MONTHLY SALES CHART -
  //-----------------------

  //---------------------------
  // - END MONTHLY SALES CHART -
  //---------------------------

  

  //-----------------
  // - END PIE CHART -
  //-----------------

  /* jVector Maps
   * ------------
   * Create a world map with markers
   */
 
	 
   function redraw() {
	$('#world-map-markers-2').mapael({
    map: {
      name: 'taiwan3',
      zoom: {
        enabled: false,
        maxLevel: 10,
		init: {
			   level: 8,
               y: 15
		}
      },
	  // Set default plots and areas style
      defaultPlot: {
                        attrs: {
                            fill: "#28a745"
                            , opacity: 3
                        }
                        , attrsHover: {
                            opacity: 1
                        }
                        , text: {
                            attrs: {
                                fill: "#505444"
                            }
                            , attrsHover: {
                                fill: "#000"
                            }
                        }
      }, 
	  defaultArea: {
        attrs: {
          fill: "#B3D4FC", 
		  stroke: "#fff"
        }, 
		attrsHover: {
          fill: "#a4e100"
        }, 
		text: {
          attrs: {
            fill: "#505444"
          }, 
		  attrsHover: {
            fill: "#000"
          }
       }
      },
	},
                plots: {
					// Plot positioned by x and y instead of latitude, longitude
                    'myplot1': {
                        x: 350,
                        y: 20,
						size: 8,
						attrs: {
                            fill: "#ff0000"
                            , opacity: 1
                        },
                        text: {
                            content: "Critical Event"
                            , position: "right"
                            , attrs: {"font-size": 8, fill: "#ff0000", opacity: 1}
                            , attrsHover: {fill: "#ff0000", opacity: 1}
                        },
                    },
					 'myplot2': {
                        x: 350,
                        y: 35,
						size: 8,
						attrs: {
                            fill: "#ffc107"
                            , opacity: 1
                        },
                        text: {
                            content: "Minor Event"
                            , position: "right"
                            , attrs: {"font-size": 8, fill: "#ffc107", opacity: 1}
                            , attrsHover: {fill: "#ffc107", opacity: 1}
                        },
                    },
					'myplot3': {
                        x: 350,
                        y: 50,
						size: 8,
						attrs: {
                            fill: "#28a745"
                            , opacity: 1
                        },
                        text: {
                            content: "Normal Event"
                            , position: "right"
                            , attrs: {"font-size": 8, fill: "#28a745", opacity: 1}
                            , attrsHover: {fill: "#28a745", opacity: 1}
                        },
                    },
					'Taipei_0': {
						type: "circle",
                        x: 515,
                        y: 65,
						size: 12,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 10
                                , "font-weight": "bold"
                                , fill: "#fff"
                            },
                            attrsHover: {
                                "font-size": 10
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
						
					},
					'Taipei_1': {
						type: "circle",
                        x: 515,
                        y: 90,
						size: 12,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 10
                                , "font-weight": "bold"
                                , fill: "#fff"
                            },
                            attrsHover: {
                                "font-size": 10
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
						
					},
					'Taipei_2': {
						type: "circle",
                        x: 530,
                        y: 80,
						size: 12,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 10
                                , "font-weight": "bold"
                                , fill: "#fff"
                            },
                            attrsHover: {
                                "font-size": 10
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
						
					},
					'Taipei_3': {
						type: "circle",
                        x: 490,
                        y: 100,
						size: 12,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 10
                                , "font-weight": "bold"
                                , fill: "#fff"
                            },
                            attrsHover: {
                                "font-size": 10
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
						
					},
					'Tau': {
						type: "circle",
                        x: 450,
                        y: 95,
						size: 12,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 10
                                , "font-weight": "bold"
                                , fill: "#fff"
                            },
                            attrsHover: {
                                "font-size": 10
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'hsi': {
						type: "circle",
                        x: 410,
                        y: 140,
						size: 12,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 10
                                , "font-weight": "bold"
                                , fill: "#fff"
                            },
                            attrsHover: {
                                "font-size": 10
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
                }
      
    })
   }
  $('#world-map-markers').mapael({
    map: {
      name: 'usa_states',
      zoom: {
        enabled: true,
        maxLevel: 10
      },
                plots: {
					// Plot positioned by x and y instead of latitude, longitude
                    'myplot': {
                        x: 0,
                        y: 0,
                        text: {
                            content: "My plot"
                            , position: "bottom"
                            , attrs: {"font-size": 10, fill: "#004a9b", opacity: 0.6}
                            , attrsHover: {fill: "#004a9b", opacity: 1}
                        },
                    }
                }
    }
  })
  $('#world-map-markers-2').mapael({
    map: {
      name: 'taiwan',
      zoom: {
        enabled: true,
        maxLevel: 10
      },
	  // Set default plots and areas style
      defaultPlot: {
                        attrs: {
                            fill: "#28a745"
                            , opacity: 3
                        }
                        , attrsHover: {
                            opacity: 1
                        }
                        , text: {
                            attrs: {
                                fill: "#505444"
                            }
                            , attrsHover: {
                                fill: "#000"
                            }
                        }
                    }, 
					defaultArea: {
                        attrs: {
                            fill: "#b3b0ae"
                            , stroke: "#fff"
                        }
                        , attrsHover: {
                            fill: "#a4e100"
                        }
                        , text: {
                            attrs: {
                                fill: "#505444"
                            }
                            , attrsHover: {
                                fill: "#000"
                            }
                        }
                    }
	            },
			areas: {
	  //北台灣
      "Taoyuan": {
        attrs: {
          fill: "#B3D4FC"
        }
        , attrsHover: {
          fill: "#a4e100"
        },
		eventHandlers: {
          click: function () {
          
		  },
          dblclick: function (e, id, mapElem, textElem) {
            redraw();
          }			
		}
      },
	  "Hsinchu": {
        attrs: {
          fill: "#B3D4FC"
        }
        , attrsHover: {
          fill: "#a4e100"
        },
		eventHandlers: {
          click: function () {
          
		  },
          dblclick: function (e, id, mapElem, textElem) {
            redraw();
          }			
		}
      },
	  "Hsinchu City": {
        attrs: {
          fill: "#B3D4FC"
        }
        , attrsHover: {
          fill: "#a4e100"
        },
		eventHandlers: {
          click: function () {
          
		  },
          dblclick: function (e, id, mapElem, textElem) {
            redraw();
          }			
		}
      }, 
	  "New Taipei City": {
        attrs: {
          fill: "#B3D4FC"
        }
        , attrsHover: {
          fill: "#a4e100"
        },
		eventHandlers: {
          click: function () {
          
		  },
          dblclick: function (e, id, mapElem, textElem) {
            redraw();
          }			
		}
      },
	  "Keelung City": {
        attrs: {
          fill: "#B3D4FC"
        }
        , attrsHover: {
          fill: "#a4e100"
        },
		eventHandlers: {
          click: function () {
          
		  },
          dblclick: function (e, id, mapElem, textElem) {
            redraw();
          }			
		}
      },
	  "Taipei City": {
        attrs: {
          fill: "#B3D4FC"
        }
        , attrsHover: {
          fill: "#a4e100"
        },
		eventHandlers: {
          click: function () {
          
		  },
          dblclick: function (e, id, mapElem, textElem) {
            redraw();
          }			
		}
      },
	  //中台灣
	  "Miaoli": {
        attrs: {
          fill: "#C9E7B2"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
	  "Taichung City": {
        attrs: {
          fill: "#C9E7B2"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
	  "Nantou": {
        attrs: {
          fill: "#C9E7B2"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
	  "Changhua": {
        attrs: {
          fill: "#C9E7B2"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
	  "Yunlin": {
        attrs: {
          fill: "#C9E7B2"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
	  //南臺灣
	  "Chiayi": {
        attrs: {
          fill: "#FFF2A6"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
	  "Tainan City": {
        attrs: {
          fill: "#FFF2A6"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
	  "Kaohsiung City": {
        attrs: {
          fill: "#FFF2A6"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
	  "Pingtung": {
        attrs: {
          fill: "#FFF2A6"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
	  //東台灣
	  "Yilan": {
        attrs: {
          fill: "#E2C8F1"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
	  "Hualien": {
        attrs: {
          fill: "#E2C8F1"
        }
        , attrsHover: {
          fill: "#a4e100"
        },
		 eventHandlers: {
                            click: function () {
								
                            },
                            dblclick: function (e, id, mapElem, textElem) {
								redraw();
							}
		 }
      },
	  "Taitung": {
        attrs: {
          fill: "#E2C8F1"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
	  //美國
	  "NY": {
        attrs: {
          fill: "#FFEE99"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
	  "NJ": {
        attrs: {
          fill: "#FFEE99"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
	  "RI": {
        attrs: {
          fill: "#FFEE99"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
	  "WI": {
        attrs: {
          fill: "#BBBB00"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
	   "CA": {
        attrs: {
          fill: "#00AAAA"
        }
        , attrsHover: {
          fill: "#a4e100"
        }
      },
    },
                plots: {
					// Plot positioned by x and y instead of latitude, longitude
                    'myplot1': {
                        x: 70,
                        y: 20,
						size: 24,
						attrs: {
                            fill: "#ff0000"
                            , opacity: 1
                        },
                        text: {
                            content: "Critical Event"
                            , position: "right"
                            , attrs: {"font-size": 24, fill: "#ff0000", opacity: 1}
                            , attrsHover: {fill: "#ff0000", opacity: 1}
                        },
                    },
					 'myplot2': {
                        x: 70,
                        y: 70,
						size: 24,
						attrs: {
                            fill: "#ffc107"
                            , opacity: 1
                        },
                        text: {
                            content: "Minor Event"
                            , position: "right"
                            , attrs: {"font-size": 24, fill: "#ffc107", opacity: 1}
                            , attrsHover: {fill: "#ffc107", opacity: 1}
                        },
                    },
					'myplot3': {
                        x: 70,
                        y: 120,
						size: 24,
						attrs: {
                            fill: "#28a745"
                            , opacity: 1
                        },
                        text: {
                            content: "Normal Event"
                            , position: "right"
                            , attrs: {"font-size": 24, fill: "#28a745", opacity: 1}
                            , attrsHover: {fill: "#28a745", opacity: 1}
                        },
                    },
					'myplot4': {
                        x: 300,
                        y: 600,
						size: 24,
						attrs: {
                            fill: "#ff0000"
                            , opacity: 0
                        },
                        text: {
                            content: "北台灣地圖"
                            , position: "right"
                            , attrs: {"font-size": 24, fill: "#007bff", opacity: 1}
                            , attrsHover: {fill: "#ff0000", opacity: 1}
                        },
						eventHandlers: {
                          click: function () {
                            redraw()
		                  },
		                }
                    },
					'myplot5': {
                        x: 300,
                        y: 650,
						size: 24,
						attrs: {
                            fill: "#ff0000"
                            , opacity: 0
                        },
                        text: {
                            content: "中台灣地圖"
                            , position: "right"
                            , attrs: {"font-size": 24, fill: "#007bff", opacity: 1}
                            , attrsHover: {fill: "#ff0000", opacity: 1}
                        },
                    },
					'myplot6': {
                        x: 300,
                        y: 700,
						size: 24,
						attrs: {
                            fill: "#ff0000"
                            , opacity: 0
                        },
                        text: {
                            content: "南台灣地圖"
                            , position: "right"
                            , attrs: {"font-size": 24, fill: "#007bff", opacity: 1}
                            , attrsHover: {fill: "#ff0000", opacity: 1}
                        },
                    },
					'Taipei_1': {
						type: "circle",
                        x: 370,
                        y: 100,
						size: 35,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Taipei_2': {
						type: "circle",
                        x: 410,
                        y: 110,
						size: 35,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Taipei_3': {
						type: "circle",
                        x: 330,
                        y: 80,
						size: 35,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Taipei_4': {
						type: "circle",
                        x: 330,
                        y: 140,
						size: 35,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Taipei Main Node': {
						type: "circle",
                        x: 370,
                        y: 140,
						size: 50,
						attrs: {
                            fill: "#ffc107"
                            , opacity: 1
                        },
                        text: {
                            content: "16"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Taoyuan': {
						type: "circle",
                        x: 290,
                        y: 130,
						size: 50,
						attrs: {
                            fill: "#ff0000"
                            , opacity: 1
                        },
                        text: {
                            content: "2"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Hsinchu': {
						type: "circle",
                        x: 250,
                        y: 160,
						size: 35,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Hsinchu Main Node': {
						type: "circle",
                        x: 290,
                        y: 180,
						size: 50,
						attrs: {
                            fill: "#ffc107"
                            , opacity: 1
                        },
                        text: {
                            content: "30"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Taichung City Main Node': {
						type: "circle",
                        x: 190,
                        y: 270,
						size: 50,
						attrs: {
                            fill: "#ffc107"
                            , opacity: 1
                        },
                        text: {
                            content: "16"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Taichung City': {
						type: "circle",
                        x: 210,
                        y: 300,
						size: 35,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Nantou': {
						type: "circle",
                        x: 250,
                        y: 350,
						size: 35,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Chiayi': {
						type: "circle",
                        x: 170,
                        y: 410,
						size: 35,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Tainan City Main Node': {
						type: "circle",
                        x: 140,
                        y: 500,
						size: 50,
						attrs: {
                            fill: "#ffc107"
                            , opacity: 1
                        },
                        text: {
                            content: "3"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Tainan City': {
						type: "circle",
                        x: 110,
                        y: 530,
						size: 35,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Kaohsiung City': {
						type: "circle",
                        x: 120,
                        y: 610,
						size: 35,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Yilan': {
						type: "circle",
                        x: 400,
                        y: 170,
						size: 35,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					'Hualien': {
						type: "circle",
                        x: 350,
                        y: 350,
						size: 35,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},
					/*
					'Taitung': {
						type: "circle",
                        x: 260,
                        y: 600,
						size: 35,
                        text: {
                            content: "0"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        },
					},*/
					'California': {
						type: "circle",
                        x: 600,
                        y: 350,
						size: 50,
						attrs: {
                            fill: "#ff0000"
                            , opacity: 1
                        },
                        text: {
                            content: "2"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            }
						}
					},
					'Wisconsin': {
						type: "circle",
                        x: 1100,
                        y: 180,
						size: 50,
						attrs: {
                            fill: "#ffc107"
                            , opacity: 1
                        },
                        text: {
                            content: "2"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
						}
					},
					'New York': {
						type: "circle",
                        x: 1350,
                        y: 180,
						size: 50,
						attrs: {
                            fill: "#ffc107"
                            , opacity: 1
                        },
                        text: {
                            content: "3"
                            , position: "inner"
                            , attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#000"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
						}
					}
                },
				// Links allow you to connect plots between them
                links: {
                    'link1': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Taipei Main Node', 'California']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link2': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['California', 'Wisconsin']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link3': {
                        factor: 0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['California', 'New York']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link4': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Tainan City Main Node', 'Taichung City Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link4_1': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Tainan City Main Node', 'Hsinchu Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link4_2': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Tainan City Main Node', 'Hsinchu Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link4_3': {
                        factor: 0.4
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Hsinchu Main Node', 'Tainan City Main Node',]
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link5': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Taichung City Main Node', 'Taipei Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link6': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Hsinchu Main Node', 'Taipei Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					/*
					'link7': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Taitung', 'Tainan City Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },*/
					'link8': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Kaohsiung City', 'Tainan City Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link9': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Tainan City', 'Tainan City Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link10': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Chiayi', 'Tainan City Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link11': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Chiayi', 'Hsinchu Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link12': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Taichung City', 'Taichung City Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link13': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Nantou', 'Taichung City Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link14': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Hsinchu', 'Hsinchu Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link15': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Taoyuan', 'Taipei Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link16': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Taipei_1', 'Taipei Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link17': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Taipei_2', 'Taipei Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link18': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Taipei_3', 'Taipei Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link19': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Taipei_4', 'Taipei Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link20': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Hualien', 'Taipei Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					'link21': {
                        factor: -0.2
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Yilan', 'Taipei Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
					/*
					'link22': {
                        factor: 0.4
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Taitung', 'Taipei Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },*/
					'link23': {
                        factor: 0.4
                        // The source and the destination of the link can be set with a latitude and a longitude or a x and a y ...
                        //, between: [{  x: 0,y: 200,}, {x: 560, y: 280}]
						, between: ['Hualien', 'Tainan City Main Node']
                        , attrs: {
							"stroke": '#28a745',
                            "stroke-width": 6,
							"stroke-dasharray": "- ",
                        }
                        , tooltip: {content: "Link"}
                    },
				}
  });
  
  $(".mapcontainer2").mapael({
                map: {
                    name: "taiwan"
                    // Enable zoom on the map
                    , zoom: {
                        enabled: true,
                        maxLevel: 10
                    }
                    // Set default plots and areas style
                    , defaultPlot: {
                        attrs: {
                            fill: "#004a9b"
                            , opacity: 0.6
                        }
                        , attrsHover: {
                            opacity: 1
                        }
                        , text: {
                            attrs: {
                                fill: "#505444"
                            }
                            , attrsHover: {
                                fill: "#000"
                            }
                        }
                    }
                    , defaultArea: {
                        attrs: {
                            fill: "#f4f4e8"
                            , stroke: "#ced8d0"
                        }
                        , attrsHover: {
                            fill: "#a4e100"
                        }
                        , text: {
                            attrs: {
                                fill: "#505444"
                            }
                            , attrsHover: {
                                fill: "#000"
                            }
                        }
                    }
                },

                // Customize some areas of the map
                areas: {
                    "department-56": {
                        text: {content: "Morbihan", attrs: {"font-size": 10}},
                        tooltip: {content: "Morbihan (56)"}
                    },
                    "department-21": {
                        attrs: {
                            fill: "#488402"
                        }
                        , attrsHover: {
                            fill: "#a4e100"
                        }
                    }
                },

                // Add some plots on the map
                plots: {
					// Plot positioned by x and y instead of latitude, longitude
                    'myplot2': {
                        x: 100,
                        y: 200,
                        text: {
                            content: "My plot"
                            , position: "bottom"
                            , attrs: {"font-size": 10, fill: "#004a9b", opacity: 0.6}
                            , attrsHover: {fill: "#004a9b", opacity: 1}
                        },
                    },
                    // Image plot
                    'paris': {
                        type: "image",
                        url: "http://www.neveldo.fr/mapael/assets/img/marker.png",
                        width: 12,
                        height: 40,
                        latitude: 48.86,
                        longitude: 2.3444,
                        attrs: {
                            opacity: 1
                        },
                        attrsHover: {
                            transform: "s1.5"
                        }
                    },
                    // SVG plot
                    'Limoge': {
                        type: "svg",
                        path: "M 24.267286,27.102843 15.08644,22.838269 6.3686216,27.983579 7.5874348,17.934248 0,11.2331 9.9341158,9.2868473 13.962641,0 l 4.920808,8.8464793 10.077199,0.961561 -6.892889,7.4136777 z",
                        width: 30,
                        height: 30,
                        latitude: 45.8188276,
                        longitude: 1.1060351,
                        attrs: {
                            opacity: 1
                        }
                    },
                    // Circle plot
                    'lyon': {
                        type: "circle",
                        size: 50,
                        latitude: 45.758888888889,
                        longitude: 4.8413888888889,
                        value: 700000,
                        tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Lyon"},
                        text: {content: "Lyon"}
                    },
                    // Square plot
                    'rennes': {
                        type: "square",
                        size: 20,
                        latitude: 48.114166666667,
                        longitude: -1.6808333333333,
                        tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Rennes"},
                        text: {content: "Rennes"}
                    },
                    // Plot positioned by x and y instead of latitude, longitude
                    'myplot': {
                        x: 300,
                        y: 200,
                        text: {
                            content: "My plot"
                            , position: "bottom"
                            , attrs: {"font-size": 10, fill: "#004a9b", opacity: 0.6}
                            , attrsHover: {fill: "#004a9b", opacity: 1}
                        },
                    },
                    'Bordeaux': {
                        type: "circle",
                        size: 30,
                        latitude: 44.834763,
                        longitude: -0.580991,
                        attrs: {
                            opacity: 1
                        },
                        text: {
                            content: "33",
                            position: "inner",
                            attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        }
                    }
                }
            });
  
  $(".mapcontainer").mapael({
                map: {
                    name: "france_departments"
                    // Enable zoom on the map
                    , zoom: {
                        enabled: true,
                        maxLevel: 10
                    }
                    // Set default plots and areas style
                    , defaultPlot: {
                        attrs: {
                            fill: "#004a9b"
                            , opacity: 0.6
                        }
                        , attrsHover: {
                            opacity: 1
                        }
                        , text: {
                            attrs: {
                                fill: "#505444"
                            }
                            , attrsHover: {
                                fill: "#000"
                            }
                        }
                    }
                    , defaultArea: {
                        attrs: {
                            fill: "#f4f4e8"
                            , stroke: "#ced8d0"
                        }
                        , attrsHover: {
                            fill: "#a4e100"
                        }
                        , text: {
                            attrs: {
                                fill: "#505444"
                            }
                            , attrsHover: {
                                fill: "#000"
                            }
                        }
                    }
                },

                // Customize some areas of the map
                areas: {
                    "department-56": {
                        text: {content: "Morbihan", attrs: {"font-size": 10}},
                        tooltip: {content: "Morbihan (56)"}
                    },
                    "department-21": {
                        attrs: {
                            fill: "#488402"
                        }
                        , attrsHover: {
                            fill: "#a4e100"
                        }
                    }
                },

                // Add some plots on the map
                plots: {
					// Plot positioned by x and y instead of latitude, longitude
                    'myplot2': {
                        x: 100,
                        y: 200,
                        text: {
                            content: "My plot"
                            , position: "bottom"
                            , attrs: {"font-size": 10, fill: "#004a9b", opacity: 0.6}
                            , attrsHover: {fill: "#004a9b", opacity: 1}
                        },
                    },
                    // Image plot
                    'paris': {
                        type: "image",
                        url: "http://www.neveldo.fr/mapael/assets/img/marker.png",
                        width: 12,
                        height: 40,
                        latitude: 48.86,
                        longitude: 2.3444,
                        attrs: {
                            opacity: 1
                        },
                        attrsHover: {
                            transform: "s1.5"
                        }
                    },
                    // SVG plot
                    'Limoge': {
                        type: "svg",
                        path: "M 24.267286,27.102843 15.08644,22.838269 6.3686216,27.983579 7.5874348,17.934248 0,11.2331 9.9341158,9.2868473 13.962641,0 l 4.920808,8.8464793 10.077199,0.961561 -6.892889,7.4136777 z",
                        width: 30,
                        height: 30,
                        latitude: 45.8188276,
                        longitude: 1.1060351,
                        attrs: {
                            opacity: 1
                        }
                    },
                    // Circle plot
                    'lyon': {
                        type: "circle",
                        size: 50,
                        latitude: 45.758888888889,
                        longitude: 4.8413888888889,
                        value: 700000,
                        tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Lyon"},
                        text: {content: "Lyon"}
                    },
                    // Square plot
                    'rennes': {
                        type: "square",
                        size: 20,
                        latitude: 48.114166666667,
                        longitude: -1.6808333333333,
                        tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Rennes"},
                        text: {content: "Rennes"}
                    },
                    // Plot positioned by x and y instead of latitude, longitude
                    'myplot': {
                        x: 300,
                        y: 200,
                        text: {
                            content: "My plot"
                            , position: "bottom"
                            , attrs: {"font-size": 10, fill: "#004a9b", opacity: 0.6}
                            , attrsHover: {fill: "#004a9b", opacity: 1}
                        },
                    },
                    'Bordeaux': {
                        type: "circle",
                        size: 30,
                        latitude: 44.834763,
                        longitude: -0.580991,
                        attrs: {
                            opacity: 1
                        },
                        text: {
                            content: "33",
                            position: "inner",
                            attrs: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            },
                            attrsHover: {
                                "font-size": 16
                                , "font-weight": "bold"
                                , fill: "#fff"
                            }
                        }
                    }
                }
            });

var areaChartData = {
      labels  : ['Critical', 'Minor', 'Normal'],
      datasets: [
        {
          label               : 'Critical',
          backgroundColor     : '#f00',
          borderColor         : '#f00',
          pointRadius          : false,
          pointColor          : '#3b8bba',
          pointStrokeColor    : 'rgba(60,141,188,1)',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data                : [28, 48, 40]
        },
      ]
    }
var areaChartData2 = {
      labels  : [['骨幹設備', ''],['局端設備',''], ['機房電源設備','與溫控設備']],
      datasets: [
        {
          label               : 'UP',
          backgroundColor     : 'green',
          borderColor         : 'green',
          pointRadius          : false,
          pointColor          : '#3b8bba',
          pointStrokeColor    : 'rgba(60,141,188,1)',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data                : [113, 140, 124]
        },
        {
          label               : 'Down',
          backgroundColor     : '#f00',
          borderColor         : '#f00',
          pointRadius         : false,
          pointColor          : 'rgba(210, 214, 222, 1)',
          pointStrokeColor    : '#c1c7d1',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data                : [10, 14, 20]
        },
      ]
    }
//-------------
//- BAR CHART -
//-------------
    var barChartCanvas = $('#barChart').get(0).getContext('2d')
    var barChartData = $.extend(true, {}, areaChartData)
	var barChartData2 = $.extend(true, {}, areaChartData2)
    var temp0 = areaChartData.datasets[0]
    //var temp1 = areaChartData.datasets[1]
	var temp3 = areaChartData2.datasets[0]
    var temp4 = areaChartData2.datasets[1]
    barChartData.datasets[0] = temp0
    //barChartData.datasets[1] = temp0
	barChartData.datasets[0].strokeColor = "green";
	barChartData2.datasets[0] = temp3
    barChartData2.datasets[1] = temp4

    console.log(barChartData.datasets[0])
    var barChartOptions = {
      responsive              : true,
      maintainAspectRatio     : false,
      datasetFill             : false,
	  display                 : true,
    }
    //new Chart(barChartCanvas, {
    //  type: 'bar',
    //  data: barChartData,
    //  options: barChartOptions
    //})
   const backgroundColor = ['red', 'rgb(255, 193, 7)', 'green']
   var barChartOptions2 = {
  type: 'bar',
  data: {
    labels: ['Critical', 'Minor', 'Normal'],
    datasets: [{
      data: [12, 19, 3],
      backgroundColor: (c) => (backgroundColor[c.dataIndex % backgroundColor.length]),
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          reverse: false
        }
      }]
    },
	legend: {
       display: false
    },
	title: {
		display: true,
		text: '依據事件告警嚴重等級統計'
	}
  }
}
    new Chart(barChartCanvas, barChartOptions2);
//---------------------
    //- STACKED BAR CHART -
    //---------------------
    var stackedBarChartCanvas = $('#stackedBarChart').get(0).getContext('2d')
    var stackedBarChartData = $.extend(true, {}, barChartData2)

    var stackedBarChartOptions = {
      responsive              : true,
      maintainAspectRatio     : false,
	  plugins: {
        // Change options for ALL labels of THIS CHART
        datalabels: {
          color: '#36A2EB'
        }
      },
      scales: {
        xAxes: [{
          stacked: true,
        }],
        yAxes: [{
          stacked: true
        }]
      },
	  title: {
		  display: true,
		  text: 'TWAREN設備存活狀態比例圖',
		  font: {weight: 'bold', size: 30}
	  }
    }

    new Chart(stackedBarChartCanvas, {
      type: 'bar',
      data: stackedBarChartData,
      options: stackedBarChartOptions
    })
	$("input[data-bootstrap-switch]").each(function(){
      $(this).bootstrapSwitch('state', $(this).prop('checked'));
    })
  // $('#world-map-markers').vectorMap({
  //   map              : 'world_en',
  //   normalizeFunction: 'polynomial',
  //   hoverOpacity     : 0.7,
  //   hoverColor       : false,
  //   backgroundColor  : 'transparent',
  //   regionStyle      : {
  //     initial      : {
  //       fill            : 'rgba(210, 214, 222, 1)',
  //       'fill-opacity'  : 1,
  //       stroke          : 'none',
  //       'stroke-width'  : 0,
  //       'stroke-opacity': 1
  //     },
  //     hover        : {
  //       'fill-opacity': 0.7,
  //       cursor        : 'pointer'
  //     },
  //     selected     : {
  //       fill: 'yellow'
  //     },
  //     selectedHover: {}
  //   },
  //   markerStyle      : {
  //     initial: {
  //       fill  : '#00a65a',
  //       stroke: '#111'
  //     }
  //   },
  //   markers          : [
  //     {
  //       latLng: [41.90, 12.45],
  //       name  : 'Vatican City'
  //     },
  //     {
  //       latLng: [43.73, 7.41],
  //       name  : 'Monaco'
  //     },
  //     {
  //       latLng: [-0.52, 166.93],
  //       name  : 'Nauru'
  //     },
  //     {
  //       latLng: [-8.51, 179.21],
  //       name  : 'Tuvalu'
  //     },
  //     {
  //       latLng: [43.93, 12.46],
  //       name  : 'San Marino'
  //     },
  //     {
  //       latLng: [47.14, 9.52],
  //       name  : 'Liechtenstein'
  //     },
  //     {
  //       latLng: [7.11, 171.06],
  //       name  : 'Marshall Islands'
  //     },
  //     {
  //       latLng: [17.3, -62.73],
  //       name  : 'Saint Kitts and Nevis'
  //     },
  //     {
  //       latLng: [3.2, 73.22],
  //       name  : 'Maldives'
  //     },
  //     {
  //       latLng: [35.88, 14.5],
  //       name  : 'Malta'
  //     },
  //     {
  //       latLng: [12.05, -61.75],
  //       name  : 'Grenada'
  //     },
  //     {
  //       latLng: [13.16, -61.23],
  //       name  : 'Saint Vincent and the Grenadines'
  //     },
  //     {
  //       latLng: [13.16, -59.55],
  //       name  : 'Barbados'
  //     },
  //     {
  //       latLng: [17.11, -61.85],
  //       name  : 'Antigua and Barbuda'
  //     },
  //     {
  //       latLng: [-4.61, 55.45],
  //       name  : 'Seychelles'
  //     },
  //     {
  //       latLng: [7.35, 134.46],
  //       name  : 'Palau'
  //     },
  //     {
  //       latLng: [42.5, 1.51],
  //       name  : 'Andorra'
  //     },
  //     {
  //       latLng: [14.01, -60.98],
  //       name  : 'Saint Lucia'
  //     },
  //     {
  //       latLng: [6.91, 158.18],
  //       name  : 'Federated States of Micronesia'
  //     },
  //     {
  //       latLng: [1.3, 103.8],
  //       name  : 'Singapore'
  //     },
  //     {
  //       latLng: [1.46, 173.03],
  //       name  : 'Kiribati'
  //     },
  //     {
  //       latLng: [-21.13, -175.2],
  //       name  : 'Tonga'
  //     },
  //     {
  //       latLng: [15.3, -61.38],
  //       name  : 'Dominica'
  //     },
  //     {
  //       latLng: [-20.2, 57.5],
  //       name  : 'Mauritius'
  //     },
  //     {
  //       latLng: [26.02, 50.55],
  //       name  : 'Bahrain'
  //     },
  //     {
  //       latLng: [0.33, 6.73],
  //       name  : 'São Tomé and Príncipe'
  //     }
  //   ]
  // })
})

// lgtm [js/unused-local-variable]
