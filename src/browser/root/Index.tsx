import * as React from "react";
import { AutoSizer } from "react-virtualized";

class Index extends React.Component<{}, {}> {
    render() {
        var columncount = 4;
        return (
            <div style={{ width: "100%", margin: "auto", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ flexGrow: 1, backgroundColor: 'lightgray' }}>
                    <div style={{ flex: "1 1 auto" }}>
                        <AutoSizer
                            defaultWidth={1200}
                            defaultHeight={400}>
                            {({ width, height }) => {
                                if (!width || !height) {
                                    //dont try to correct
                                    return <div>Unable to determine dimensions width={width} height={height}</div>;
                                }
                                return (
                                    <div style={{width: width, height: "100%"}}>
                                        {[...Array(columncount)].map((x, i) =>
                                            <div key={"placeholder-" + i}
                                                 style={{ float: "left", padding: 2 }}>
                                                <div style={{
                                                    backgroundColor: ((typeof window != "undefined") ? 'green' : 'yellow'),
                                                    width: (width - 60) / columncount,
                                                    height: 100}} >
                                                    Cell {i}
                                                </div>
                                            </div>
                                        )}
                                        <div style={{ clear: "both" }} />
                                    </div>
                                )
                            }}
                        </AutoSizer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
