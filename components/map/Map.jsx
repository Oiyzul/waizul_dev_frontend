'use client'

import {
	ComposableMap,
	Geographies,
	Geography,
	Annotation,
	ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
	return (
		<ComposableMap
			projection='geoAzimuthalEqualArea'
			projectionConfig={{
				rotate: [-10.0, -52.0, 0],
				center: [-5, -3],
				scale: 300,
			}}
      style={{
        width:'100%',
        height:'100%',
      }}
		>
			<Geographies
				geography='/features.json'
				fill='#0b071f47'
				stroke='#FFFFFF'
				strokeWidth={0.5}
			>
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography key={geo.rsmKey} geography={geo} />
					))
				}
			</Geographies>
			<Annotation
				subject={[90.3563,23.6850 ]}
				dx={-50}
				dy={-30}
				connectorProps={{
					stroke: "#ffffff",
					strokeWidth: 2,
					strokeLinecap: "round",
				}}
			>
				<text
					x='-1'
					textAnchor='end'
					alignmentBaseline='middle'
					fill='#ffffff'
				>Bangladesh</text>
			</Annotation>
		</ComposableMap>
	);
};

export default Map;
