var APP_DATA = {
  "scenes": [
    {
      "id": "0-1---ingresso-strada",
      "name": "1 - ingresso strada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -0.19910873687691044,
        "pitch": -0.15414005979491208,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": -0.17673800588418587,
          "pitch": 0.26463943534403356,
          "rotation": 0,
          "target": "1-2---corridoio-ingresso"
        },
        {
          "yaw": -0.181882415050028,
          "pitch": -0.013626213335131254,
          "rotation": 1.5707963267948966,
          "target": "2-3---ingresso-angolo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.250148145038736,
          "pitch": -0.05011273319392551,
          "title": "Via",
          "text": "nome via"
        }
      ]
    },
    {
      "id": "1-2---corridoio-ingresso",
      "name": "2 - corridoio ingresso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7382722808165196,
          "pitch": 0.10254388818395732,
          "rotation": 0,
          "target": "0-1---ingresso-strada"
        },
        {
          "yaw": -0.40284636696106624,
          "pitch": -0.01803657215802623,
          "rotation": 1.5707963267948966,
          "target": "2-3---ingresso-angolo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3---ingresso-angolo",
      "name": "3 - ingresso angolo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 1.6671529433838463,
        "pitch": 0.18855248205702502,
        "fov": 1.3365071038314758
      },
      "linkHotspots": [
        {
          "yaw": 1.5454890858918668,
          "pitch": 0.38534901783132014,
          "rotation": 0,
          "target": "1-2---corridoio-ingresso"
        },
        {
          "yaw": 1.5555548194973152,
          "pitch": 0.03844474740414405,
          "rotation": 0,
          "target": "0-1---ingresso-strada"
        },
        {
          "yaw": -0.05441467998860894,
          "pitch": 0.15103870140767484,
          "rotation": 4.71238898038469,
          "target": "3-4---ant-cancello"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4---ant-cancello",
      "name": "4 - ant cancello",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.023825708104196153,
          "pitch": 0.7124222803061144,
          "rotation": 0,
          "target": "4-5---post-cancello"
        },
        {
          "yaw": -1.5618094306237644,
          "pitch": -0.1102752947100214,
          "rotation": 4.71238898038469,
          "target": "2-3---ingresso-angolo"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.116575744007129,
          "pitch": -0.38495468292425983,
          "title": "Rif. Storia",
          "text": "<font color=\"#82746e\" face=\"Prompt, sans-serif\"><span style=\"font-size: 17px; background-color: rgb(255, 255, 255);\">Scavate nell'arenaria con persorso labirintico, le Grotte di Camerano si estendono sotto il centro storico del paese per una lunghezza complessiva di circa 3 chilometri. Nate con i primi insediamenti locali di epoca neolitica, l'ipogeo ha visto nei secoli un continuo ampliamento e sviluppo che lo hanno reso una vera e propria città sotterranea. Erroneamente considerate fino agli anni '70 come delle semplici cave o cantine, le Grotte di Camerano rivelano agli occhi dei visitatori abbellimenti architettonici, bassorilievi di natura religiosa&nbsp; e sale circolari con particolare gusto architettonico che svelano una storia antica, a tratti misteriosa, che spazia dalle guerre mondiali alle congiure ottocentesce, dalle chiese medievale ad antichi riti pagani.</span></font>"
        },
        {
          "yaw": 2.95346078140326,
          "pitch": 0.046209443902698766,
          "title": "Indicazioni",
          "text": "uscita di emergenza"
        }
      ]
    },
    {
      "id": "4-5---post-cancello",
      "name": "5 - post cancello",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6181463681945516,
          "pitch": 0.8005171927715224,
          "rotation": 0,
          "target": "5-6---scale-grotta"
        },
        {
          "yaw": -1.6300965938464351,
          "pitch": 0.5405620641690998,
          "rotation": 0,
          "target": "6-7---scale-basse-grotta"
        },
        {
          "yaw": 1.5680850740895416,
          "pitch": 0.646657417541002,
          "rotation": 1.5707963267948966,
          "target": "3-4---ant-cancello"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-6---scale-grotta",
      "name": "6 - scale grotta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4782033527334733,
          "pitch": -0.022875964227253576,
          "rotation": 0,
          "target": "4-5---post-cancello"
        },
        {
          "yaw": -1.4812851669523432,
          "pitch": -0.41891931115895886,
          "rotation": 1.5707963267948966,
          "target": "3-4---ant-cancello"
        },
        {
          "yaw": 1.603879566588045,
          "pitch": 0.6777521213928424,
          "rotation": 0,
          "target": "6-7---scale-basse-grotta"
        },
        {
          "yaw": 1.613980041817241,
          "pitch": 0.35998886860421564,
          "rotation": 0,
          "target": "7-8---grotta-centro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-7---scale-basse-grotta",
      "name": "7 - scale basse grotta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.30747106448986017,
          "pitch": 0.10405737040977492,
          "rotation": 6.283185307179586,
          "target": "5-6---scale-grotta"
        },
        {
          "yaw": 0.35074160536862387,
          "pitch": -0.24547026116225013,
          "rotation": 0,
          "target": "3-4---ant-cancello"
        },
        {
          "yaw": -2.7576804824807155,
          "pitch": 0.4465216791935376,
          "rotation": 0,
          "target": "7-8---grotta-centro"
        },
        {
          "yaw": -2.7735729633919473,
          "pitch": 0.1599074376354661,
          "rotation": 0,
          "target": "8-9---grotta-fine"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1111067101461174,
          "pitch": 0.20237006130444257,
          "title": "Indicazioni",
          "text": "uscita emergenza"
        }
      ]
    },
    {
      "id": "7-8---grotta-centro",
      "name": "8 - grotta centro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5898592559180234,
          "pitch": 0.23511958107157227,
          "rotation": 0,
          "target": "6-7---scale-basse-grotta"
        },
        {
          "yaw": 1.6122091919792467,
          "pitch": -0.018347860525565807,
          "rotation": 0,
          "target": "5-6---scale-grotta"
        },
        {
          "yaw": -1.5083492885754435,
          "pitch": 0.27220322243606887,
          "rotation": 0,
          "target": "8-9---grotta-fine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-9---grotta-fine",
      "name": "9 - grotta fine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9916299309631178,
          "pitch": -0.06573082773211425,
          "rotation": 0.7853981633974483,
          "target": "9-10---abside-sx"
        },
        {
          "yaw": -1.3037954809080556,
          "pitch": -0.09989872036642922,
          "rotation": 5.497787143782138,
          "target": "11-12---abside-dx"
        },
        {
          "yaw": -1.582427213320507,
          "pitch": 0.4918975185621193,
          "rotation": 0,
          "target": "12-13---cripta"
        },
        {
          "yaw": 1.5372135135194291,
          "pitch": 0.36749252574371916,
          "rotation": 0,
          "target": "7-8---grotta-centro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-10---abside-sx",
      "name": "10 - abside sx",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4552398008123362,
          "pitch": 0.20958869566063498,
          "rotation": 0.7853981633974483,
          "target": "10-11---abside-centro"
        },
        {
          "yaw": 0.8516913417379879,
          "pitch": 0.31405347538384376,
          "rotation": 0.7853981633974483,
          "target": "8-9---grotta-fine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-11---abside-centro",
      "name": "11 - abside centro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.16471584817067786,
          "pitch": 0.4557311336282144,
          "rotation": 5.497787143782138,
          "target": "9-10---abside-sx"
        },
        {
          "yaw": -0.9891698970582077,
          "pitch": 0.40635402313308333,
          "rotation": 0.7853981633974483,
          "target": "11-12---abside-dx"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-12---abside-dx",
      "name": "12 - abside dx",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3266419325918193,
          "pitch": 0.26265934777915945,
          "rotation": 5.497787143782138,
          "target": "10-11---abside-centro"
        },
        {
          "yaw": 0.08395121458803345,
          "pitch": 0.3218407044860605,
          "rotation": 5.497787143782138,
          "target": "8-9---grotta-fine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-13---cripta",
      "name": "13 - cripta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1520,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1284142239454802,
          "pitch": -0.27205319029123487,
          "rotation": 0,
          "target": "8-9---grotta-fine"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Grotte Camerano esempio",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
