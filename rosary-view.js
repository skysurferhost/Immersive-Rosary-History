// Fit the complete Rosary at reset while retaining the existing close inspection range.
export function rosaryViewDistance(zoom,aspect,fov=43){const tangent=Math.tan(fov*Math.PI/360);return zoom*Math.max(17,4.25/(tangent*Math.max(.1,aspect)))/17;}
